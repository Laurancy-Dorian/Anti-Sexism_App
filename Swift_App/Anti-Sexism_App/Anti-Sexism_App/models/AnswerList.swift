//
//  AnswerList.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

class AnswerList {
    
    @Published var listAnswers : [Answer] = []
    
    init(){
        listAnswers.append(Answer(idAnswer: 1, description: "Une phrase", like: 15, dislike: 4, user: User(pseudo : "toto", password: "1234"), date: "12/12/2012", type: AnswerType(idAnswerType: 1, nom: "Humour", emoji: "smile")))
        listAnswers.append(Answer(idAnswer: 2, description: "Une deuxième", like: 5, dislike: 6, user: User(pseudo : "tata", password: "1234"), date: "12/12/2012", type : AnswerType(idAnswerType: 1, nom: "Humour", emoji: "smile")))
        listAnswers.append(Answer(idAnswer: 3, description: "Une troisième", like: 6, dislike: 8, user: User(pseudo : "titi", password: "1234"), date: "12/12/2012", type : AnswerType(idAnswerType: 1, nom: "Humour", emoji: "smile")))
        listAnswers.append(Answer(idAnswer: 4, description: "Une sentence", like: 29, dislike: 1, user: User(pseudo : "tutu", password: "1234"), date: "12/12/2012", type : AnswerType(idAnswerType: 1, nom: "Humour", emoji: "smile")))
        listAnswers.append(Answer(idAnswer: 5, description: "Une dernière", like: 11, dislike: 8, user: User(pseudo : "toto", password: "1234"), date: "12/12/2012", type : AnswerType(idAnswerType: 1, nom: "Humour", emoji: "smile")))
    }
}
