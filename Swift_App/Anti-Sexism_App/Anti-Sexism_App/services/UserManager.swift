//
//  UserManager.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/22/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation
import SwiftUI
import Combine

class UserManager: ObservableObject {
    
    @EnvironmentObject var token: Token
    
    func Login(pseudo: String, password: String, callback: @escaping () -> Void){
        let parameters = "pseudo_user=\(pseudo)&password_user=\(password)"
        let postData =  parameters.data(using: .utf8)

        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/auth")!,timeoutInterval: Double.infinity)
        request.addValue("application/x-www-form-urlencoded", forHTTPHeaderField: "Content-Type")

        request.httpMethod = "POST"
        request.httpBody = postData

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
          guard let data = data else {
            print(String(describing: error))
            return
          }
            DispatchQueue.main.async{
                if String(data: data, encoding: .utf8)!.contains("error") {
                    self.token.value = ""
                } else {
                    let splits = String(data: data, encoding: .utf8)!.components(separatedBy: "\"")
                    self.token.value = splits[3]
                }
                callback()
            }
            print(String(data: data, encoding: .utf8)!)
        }
        task.resume()
    }
    
    func SignIn(pseudo: String, password: String){
        let parameters = "pseudo_user=\(pseudo)&password_user=\(password)"
        let postData =  parameters.data(using: .utf8)

        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/users")!,timeoutInterval: Double.infinity)
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
    
    func LogOut(){
        self.token.value = ""
    }
}
