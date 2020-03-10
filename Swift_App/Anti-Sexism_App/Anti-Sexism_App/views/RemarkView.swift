//
//  RemarkView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct RemarkView: View {
    
    init(remark: Remark){
        self.remark = remark
    }
    
    var remark: Remark // = Remark(idRemark: 1, description: "Une phrase", seen: 15, suffered: 4, user: User(pseudo : "toto", password: "1234"), date: "12/12/2012")
    var body: some View {

        VStack(alignment: .leading, spacing : 5) {
            HStack {
                HStack {
                    Text ("Par " + remark.user.pseudo)
                                   Spacer()
                                   Text (remark.date)
                    
                }
                .padding()
               
            }.background(Color.red)
            .foregroundColor(.white)
            HStack {
                Text (remark.description)
            }
            .padding()
            HStack () {
                Button(action: {
                }) {
                    HStack (spacing : 0) {
                        Text("Déja Entendu")
                        Spacer()
                        Text (String(remark.seen))
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
                        Text("Déja Subi")
                        Spacer()
                        Text (String(remark.suffered))
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
            .padding(.leading)
            .padding(.trailing)
            HStack {
                Spacer()
                Text("10")
                Image(systemName: "message")
            }
            .padding()
        }
        
        .background(Color(red : 240/255, green : 200/255, blue : 200/255))
        .cornerRadius(25)
    }

}
