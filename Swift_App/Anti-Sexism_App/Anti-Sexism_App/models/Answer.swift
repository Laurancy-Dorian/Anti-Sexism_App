//
//  Answer.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

class Answer: Identifiable {
    var idAnswer : Int
    var description : String
    var like : Int
    var dislike : Int
    var user : User
    var date : String
    var type : AnswerType
    
    init (idAnswer : Int, description : String, like : Int, dislike : Int, user : User, date : String, type : AnswerType) {
        self.idAnswer = idAnswer
        self.description = description
        self.like = like
        self.dislike = dislike
        self.user = user
        self.date = date
        self.type = type
    }
}
