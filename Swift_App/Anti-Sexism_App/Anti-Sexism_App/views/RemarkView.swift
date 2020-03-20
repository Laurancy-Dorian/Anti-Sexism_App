//
//  RemarkView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct RemarkView: View {
    
    var remark: Remark
    
    var body: some View {

        VStack(spacing: 5) {
            HStack {
                HStack {
                    if (remark.pseudo_user == "") { Text("Poste Anonyme")}
                    else { Text ("Par " + (remark.pseudo_user))}
                    Spacer()
                    Text (remark.date_remark.components(separatedBy: "T")[0])
                }
                .padding()
               
            }.background(Color.red)
            .foregroundColor(.white)
            HStack {
                Text (remark.description_remark)
            }
            .padding()
            HStack () {
                Button(action: {
                }) {
                    HStack (spacing : 0) {
                        Text("Déja Entendu")
                        Spacer()
                        Text (String(remark.nb_seen_remark))
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
                        Text (String(remark.nb_suffered_remark))
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
