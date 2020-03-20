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
    
    init(){
        guard let url = URL(string : "http://vps685054.ovh.net:8080/api/remarks") else {return}
        
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
}
