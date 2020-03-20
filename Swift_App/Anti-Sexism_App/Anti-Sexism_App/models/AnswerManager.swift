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
    var idRemark : Int
    
    init(idRemark: Int){
        self.idRemark = idRemark
        guard let url = URL(string : "http://vps685054.ovh.net:8080/api/remarks/\(idRemark)/responses") else {return}
        
        URLSession.shared.dataTask(with: url){ (data, response, error) in
            guard let data = data else {
                print(String(describing: error))
                return
            }
            
            let answerList = try! JSONDecoder().decode([Answer].self, from: data)
            print(answerList)
            
            DispatchQueue.main.async{
                self.answerList = AnswerList(results: answerList)
            }
        }.resume()
    }
}
