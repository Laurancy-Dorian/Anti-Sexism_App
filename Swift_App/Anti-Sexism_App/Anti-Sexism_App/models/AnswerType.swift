//
//  AnswerType.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

class AnswerType {
    var idAnswerType : Int
    var nom : String
    var emoji : String
    
    init(idAnswerType : Int, nom : String, emoji : String) {
        self.idAnswerType = idAnswerType
        self.nom = nom
        self.emoji = emoji
    }
}
