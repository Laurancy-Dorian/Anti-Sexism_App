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
    
    @State private var heard: Int = 0
    @State private var suffered: Int = 0
    
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
                    if (self.heard == 0){
                        RemarkManager().heardRemark(idRemark: String(self.remark.id_remark))
                        self.heard = 1
                    } else{
                        RemarkManager().unheardRemark(idRemark: String(self.remark.id_remark))
                        self.heard = 0
                    }
                }) {
                    HStack (spacing : 0) {
                        Text("Déja Entendu")
                        Spacer()
                        Text (String(remark.nb_seen_remark + heard))
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
                    if (self.suffered == 0){
                        RemarkManager().sufferedRemark(idRemark: String(self.remark.id_remark))
                        self.suffered = 1
                    } else{
                        RemarkManager().unsufferedRemark(idRemark: String(self.remark.id_remark))
                        self.suffered = 0
                    }
                }) {
                    HStack (spacing : 0) {
                        Text("Déja Subi")
                        Spacer()
                        Text (String(remark.nb_suffered_remark + suffered))
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
