//
//  API.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

class API {
    
    /**
     Performs a GET HTTP Request
     params : url   The url to get
            callback    The function to call after the request has been made
        Note - Syntaxe d'appel de la fonction
             API.get(url:"https://lien", callback : { data -> Void in
                Code
             })
     */
    static func get(url : String, callback : @escaping (_ data :  Dictionary<String, AnyObject>?) -> Void){
        
        var request = URLRequest(url: URL(string: url)!)
        request.httpMethod = "GET"

        URLSession.shared.dataTask(with: request, completionHandler: { data, response, error -> Void in
            do {
                let json = try JSONSerialization.jsonObject(with: data!) as! Dictionary<String, AnyObject>
                callback(json)
            } catch {
                callback(nil)
            }
        }).resume()
    }
    
    
    static func post (url: String, data: Dictionary<String, String>, callback: @escaping (_ data :  Dictionary<String, AnyObject>?) -> Void) {
        method_update(url: url, method: "POST", data: data, callback: callback)
    }
    
    static func patch (url: String, data: Dictionary<String, String>, callback: @escaping (_ data :  Dictionary<String, AnyObject>?) -> Void) {
        method_update(url: url, method: "PATCH", data: data, callback: callback)
    }
    
    static func put (url: String, data: Dictionary<String, String>, callback: @escaping (_ data :  Dictionary<String, AnyObject>?) -> Void) {
        method_update(url: url, method: "PATCH", data: data, callback: callback)
    }
    
    
    static private func method_update (url : String, method : String, data: Dictionary<String, String>, callback : @escaping (_ data :  Dictionary<String, AnyObject>?) -> Void) {
        var request = URLRequest(url: URL(string: url)!)
        request.httpMethod = method
    
        request.httpBody = try? JSONSerialization.data(withJSONObject: data, options: [])
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
        
        URLSession.shared.dataTask(with: request, completionHandler: { data, response, error -> Void in
            
            do {
                let json = try JSONSerialization.jsonObject(with: data!) as! Dictionary<String, AnyObject>
                callback(json)
            } catch {
                callback(nil)
            }
        }).resume()
    
    }
}
