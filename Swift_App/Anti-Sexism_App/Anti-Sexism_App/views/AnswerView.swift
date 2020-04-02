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
    @ObservedObject var answerManager: AnswerManager
    
    @State private var like: Bool = false
    @State private var dislike: Bool = false
    
    func find(value searchValue: Int, in array: [Int]) -> Int? {
        for (index, value) in array.enumerated()
        {
            if value == searchValue {
                return index
            }
        }
        return nil
    }

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
                        if self.find(value: self.answer.id_remark, in: ContentView.pertinent) != nil{
                            self.like = true
                        }
                        if (!self.like){
                            if (self.dislike){
                                self.answerManager.unDislike(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                                self.dislike = false
                                guard let index = self.find(value: self.answer.id_remark, in: ContentView.pasPertinent) else {return}
                                ContentView.pasPertinent.remove(at: index)
                            }
                            self.answerManager.like(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                            self.like = true
                            ContentView.pertinent.append(self.answer.id_remark)
                        } else{
                            self.answerManager.unLike(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                            self.like = false
                            guard let index = self.find(value: self.answer.id_remark, in: ContentView.pertinent) else {return}
                            ContentView.pertinent.remove(at: index)
                        }
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
                        if self.find(value: self.answer.id_remark, in: ContentView.pasPertinent) != nil{
                            self.dislike = true
                        }
                        if (!self.dislike){
                            if (self.like){
                                self.answerManager.unLike(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                                self.like = false
                                guard let index = self.find(value: self.answer.id_remark, in: ContentView.pertinent) else {return}
                                ContentView.pertinent.remove(at: index)
                            }
                            self.answerManager.dislike(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                            self.dislike = true
                            ContentView.pasPertinent.append(self.answer.id_remark)
                        } else{
                            self.answerManager.unDislike(idRemark: String(self.answer.id_remark), idResponse: String(self.answer.id_response))
                            self.dislike = false
                            guard let index = self.find(value: self.answer.id_remark, in: ContentView.pasPertinent) else {return}
                            ContentView.pasPertinent.remove(at: index)
                        }
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
                    .buttonStyle(PlainButtonStyle())
                }
            }
            .padding()
        }
}

