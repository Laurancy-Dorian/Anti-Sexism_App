//
//  AnswerView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct AnswerView: View {
    
    var answer: Answer

    var body: some View {
        VStack(spacing : 5) {
                HStack {
                    if (answer.pseudo_user == "") { Text("Poste Anonyme")}
                    else { Text ("Par " + (answer.pseudo_user))}
                    Spacer()
                    Text (answer.date_response.components(separatedBy: "T")[0])
                }
                .foregroundColor(.gray)
                HStack {
                    Text (answer.description_response)
                }
                HStack () {
                    Button(action: {
                    }) {
                        HStack (spacing : 0) {
                            Text("Pertinent")
                            Spacer()
                            Text (String(answer.nb_likes_response))
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
                            Text (String(answer.nb_dislikes_response))
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

