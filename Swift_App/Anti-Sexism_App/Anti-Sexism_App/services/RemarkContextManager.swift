//
//  RemarkContextManager.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/24/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation
import SwiftUI
import Combine

class RemarkContextManager: ObservableObject {
    
    @Published var remarkContextList = RemarkContextList(results: [])
    
    init(){
        var request = URLRequest(url: URL(string: "http://vps685054.ovh.net:8080/api/remarks_contexts")!,timeoutInterval: Double.infinity)
        request.httpMethod = "GET"

        let task = URLSession.shared.dataTask(with: request) { data, response, error in
          guard let data = data else {
            print(String(describing: error))
            return
          }
          //print(String(data: data, encoding: .utf8)!)
            
            let remarkContextList = try! JSONDecoder().decode([RemarkContext].self, from: data)
            DispatchQueue.main.async{
                self.remarkContextList = RemarkContextList(results: remarkContextList)
            }
        }
        task.resume()
        }
}
