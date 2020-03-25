//
//  AnswerListView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct AnswerListView: View {
    
    var idRemark : Int
    @ObservedObject var answerManager : AnswerManager
    
    init(idRemark : Int){
        self.idRemark = idRemark
        answerManager = AnswerManager(idRemark: String(idRemark))
    }
    
    var body: some View {
        List(answerManager.answerList.results, id: \.id_response){ answer in
            AnswerView(answer: answer, answerManager: self.answerManager)
        }
    }
}
