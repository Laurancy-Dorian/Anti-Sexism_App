//
//  RemarkManager.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/20/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation
import SwiftUI
import Combine

class RemarkManager: ObservableObject {
    
    @Published var remarkList = RemarkList(results: [])
    
    init(idContext: String){
        self.getAll(idContext: idContext)
    }
    
    func getAll(idContext : String) {
        guard let url = URL(string : "http://vps685054.ovh.net:8080/api/remarks?context=[\(idContext)]") else {return}
        
        URLSession.shared.dataTask(with: url){ (data, response, error) in
            guard let data = data else {
                print(String(describing: error))
                return
            }
            
            let remarkList = try! JSONDecoder().decode([Remark].self, from: data)
            //print(remarkList)
            
            DispatchQueue.main.async{
                self.remarkList = RemarkList(results: remarkList)
            }
        }.resume()
    }
    
    func getAllRemarks(){
        self.getAll(idContext: "")
    }
    
    func addRemark(description: String, idContext: String, token: String){
        let parameters = "description_remark=\(description)&id_context=\(idContext)"
        let postData =  parameters.data(using: .utf8)

        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks")!,timeoutInterval: Double.infinity)
        if (token != "") {
            request.addValue("Bearer \(token)", forHTTPHeaderField: "Authorization")
        }
        request.addValue("application/x-www-form-urlencoded", forHTTPHeaderField: "Content-Type")

        request.httpMethod = "POST"
        request.httpBody = postData

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
          guard let data = data else {
            print(String(describing: error))
            return
          }
          print(String(data: data, encoding: .utf8)!)
          self.getAllRemarks()
        }
        task.resume()
    }
    
    func heardRemark(idRemark: String){
        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/seen")!,timeoutInterval: Double.infinity)
        request.httpMethod = "PUT"

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard data != nil else {
            print(String(describing: error))
            return
          }
            self.getAllRemarks()
          //print(String(data: data, encoding: .utf8)!)
            print("heard post \(idRemark)")
        }
        task.resume()
    }
    
    func unheardRemark(idRemark: String){
        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/seen")!,timeoutInterval: Double.infinity)
        request.httpMethod = "DELETE"

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard data != nil else {
            print(String(describing: error))
            return
          }
            self.getAllRemarks()
          //print(String(data: data, encoding: .utf8)!)
            print("unheard post \(idRemark)")
        }
        task.resume()
    }
    
    func sufferedRemark(idRemark: String){
        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/suffered")!,timeoutInterval: Double.infinity)
        request.httpMethod = "PUT"

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard data != nil else {
            print(String(describing: error))
            
            return
          }
            self.getAllRemarks()
          //print(String(data: data, encoding: .utf8)!)
            print("suffered post \(idRemark)")
        }
        task.resume()
    }
    
    func unsufferedRemark(idRemark: String){
        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/suffered")!,timeoutInterval: Double.infinity)
        request.httpMethod = "DELETE"

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard data != nil else {
            print(String(describing: error))
            return
          }
            self.getAllRemarks()
          //print(String(data: data, encoding: .utf8)!)
            print("unsuffered post \(idRemark)")
        }
        task.resume()
    }
}
