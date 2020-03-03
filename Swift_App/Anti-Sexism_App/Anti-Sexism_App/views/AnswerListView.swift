//
//  AnswerListView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct AnswerListView: View {
    
    var answerList : AnswerList
    
    init() {
        answerList = AnswerList()
    }
    
    var body: some View {
        List{
            ForEach(self.answerList.listAnswers) { answer in
                    VStack{
                        AnswerView(answer: answer)
                    }
            }.padding()
        }
    }
}
