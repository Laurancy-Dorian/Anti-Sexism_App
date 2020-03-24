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
    
    @State private var like: Int = 0
    @State private var dislike: Int = 0

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
                        if (self.like == 0){
                            if (self.dislike == 1){
                                AnswerManager(idRemark: self.answer.id_remark).unDislike(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                                self.dislike = 0
                            }
                            AnswerManager(idRemark: self.answer.id_remark).like(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                            self.like = 1
                        } else{
                            AnswerManager(idRemark: self.answer.id_remark).unLike(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                            self.like = 0
                        }
                    }) {
                        HStack (spacing : 0) {
                            Text("Pertinent")
                            Spacer()
                            Text (String(answer.nb_likes_response + like))
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
                        if (self.dislike == 0){
                            if (self.like == 1){
                                AnswerManager(idRemark: self.answer.id_remark).unLike(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                                self.like = 0
                            }
                            AnswerManager(idRemark: self.answer.id_remark).dislike(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                            self.dislike = 1
                        } else{
                            AnswerManager(idRemark: self.answer.id_remark).unDislike(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                            self.dislike = 0
                        }
                    }) {
                        HStack (spacing : 0) {
                            Text("Pas Pertinent")
                            Spacer()
                            Text (String(answer.nb_dislikes_response + dislike))
                        }
                        .buttonStyle(PlainButtonStyle())
                        .font(.headline)
                        .foregroundColor(.white)
                        .padding(5)
                        .shadow(radius: 5)
                        .background(Color.red)
                        .cornerRadius(15)
                    }
                    .buttonStyle(PlainButtonStyle())
                }
            }
            .padding()
        }
}

