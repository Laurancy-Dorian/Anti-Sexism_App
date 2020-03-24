//
//  AnswerManager.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/20/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation
import SwiftUI
import Combine

class AnswerManager: ObservableObject {
    
    @Published var answerList = AnswerList(results: [])
    @Published var nbAnswers: Int = 0
    
    init(idRemark: String){
        guard let url = URL(string : "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/responses") else {return}
        
        URLSession.shared.dataTask(with: url){ (data, response, error) in
            guard let data = data else {
                print(String(describing: error))
                return
            }
            
            let answerList = try! JSONDecoder().decode([Answer].self, from: data)
            //print(answerList)
            
            DispatchQueue.main.async{
                self.answerList = AnswerList(results: answerList)
            }
        }.resume()
    }
    
    func getAllAnswers(idRemark: Int){
        guard let url = URL(string : "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/responses") else {return}
        
        URLSession.shared.dataTask(with: url){ (data, response, error) in
            guard let data = data else {
                print(String(describing: error))
                return
            }
            
            let answerList = try! JSONDecoder().decode([Answer].self, from: data)
            //print(answerList)
            
            DispatchQueue.main.async{
                self.answerList = AnswerList(results: answerList)
            }
        }.resume()
    }
    
    func addAnswer(description: String, idType: String, token: String, idRemark: String){
        let parameters = "description_response=\(description)&id_response_type=\(idType)"
        let postData =  parameters.data(using: .utf8)

        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/responses")!,timeoutInterval: Double.infinity)
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
        }
        task.resume()
    }
    
    func countAnswers(idRemark: String) -> Int{
        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/responses")!,timeoutInterval: Double.infinity)
        request.httpMethod = "GET"

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
          guard let data = data else {
            print(String(describing: error))
            return
          }
          let answerList = try! JSONDecoder().decode([Answer].self, from: data)
          //print(answerList)

          DispatchQueue.main.async{
              self.answerList = AnswerList(results: answerList)
          }
          self.nbAnswers = answerList.count
        }

        task.resume()
        return self.nbAnswers
    }
    
    func like(idRemark: String, idResponse: String){
        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/responses/\(idResponse)/like")!,timeoutInterval: Double.infinity)
        request.httpMethod = "PUT"

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard data != nil else {
            print(String(describing: error))
            return
          }
          //print(String(data: data, encoding: .utf8)!)
            print("liked response \(idResponse) of post \(idRemark)")
        }
        task.resume()
    }
    
    func unLike(idRemark: String, idResponse: String){
        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/responses/\(idResponse)/like")!,timeoutInterval: Double.infinity)
        request.httpMethod = "DELETE"

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard data != nil else {
            print(String(describing: error))
            return
          }
          //print(String(data: data, encoding: .utf8)!)
            print("unliked response \(idResponse) of post \(idRemark)")
        }
        task.resume()
    }
    
    func dislike(idRemark: String, idResponse: String){
        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/responses/\(idResponse)/dislike")!,timeoutInterval: Double.infinity)
        request.httpMethod = "PUT"

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard data != nil else {
            print(String(describing: error))
            return
          }
          //print(String(data: data, encoding: .utf8)!)
            print("disliked response \(idResponse) of post \(idRemark)")
        }
        task.resume()
    }
    
    func unDislike(idRemark: String, idResponse: String){
        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/responses/\(idResponse)/dislike")!,timeoutInterval: Double.infinity)
        request.httpMethod = "DELETE"

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
            guard data != nil else {
            print(String(describing: error))
            return
          }
          //print(String(data: data, encoding: .utf8)!)
            print("undisliked response \(idResponse) of post \(idRemark)")
        }
        task.resume()
    }
}
