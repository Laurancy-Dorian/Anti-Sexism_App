//
//  AnswerTypeList.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

class AnswerTypeList {
     @Published var listTypes : [AnswerType] = []
    
    init() {
        listTypes.append(AnswerType(idAnswerType: 1, nom: "Humour", emoji: "smile"))
        listTypes.append(AnswerType(idAnswerType: 2, nom: "Colère", emoji: "angry"))
        listTypes.append(AnswerType(idAnswerType: 3, nom: "Ironie", emoji: "devil"))
        listTypes.append(AnswerType(idAnswerType: 4, nom: "Factuel", emoji: "nerd"))
    }
}
