//
//  AnswerView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct AnswerView: View {
    
    init(answer: Answer){
        self.answer = answer
    }
    
    var answer: Answer

    var body: some View {
        VStack(alignment: .leading, spacing : 5) {
                HStack {
                    Text ("Par " + answer.user.pseudo)
                    Spacer()
                    Text (answer.date)
                }
                .foregroundColor(.gray)
                HStack {
                    Text (answer.description)
                }
                HStack () {
                    Button(action: {
                    }) {
                        HStack (spacing : 0) {
                            Text("Pertinent")
                            Spacer()
                            Text (String(answer.like))
                        }
                        .font(.headline)
                        .foregroundColor(.white)
                        .padding(5)
                        .shadow(radius: 5)
                        .background(Color.blue)
                        .cornerRadius(15)
                    }
                    .buttonStyle(PlainButtonStyle())
                    Spacer()
                    Button(action: {
                    }) {
                        HStack (spacing : 0) {
                            Text("Pas Pertinent")
                            Spacer()
                            Text (String(answer.dislike))
                        }
                        .buttonStyle(PlainButtonStyle())
                        .font(.headline)
                        .foregroundColor(.white)
                        .padding(5)
                        .shadow(radius: 5)
                        .background(Color.red)
                        .cornerRadius(15)
                    }
                }
            }
            .padding()
        }
}

