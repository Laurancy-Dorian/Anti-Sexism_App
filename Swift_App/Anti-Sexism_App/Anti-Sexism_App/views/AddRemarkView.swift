//
//  AddRemarkView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct AddRemarkView: View {
    
    var parent : AddRemarkPage!
    
    @ObservedObject var remarkManager: RemarkManager
    
    @State private var contexts = ["Dans la rue", "Dans les transports", "Au travail", "Au domicile"]
    @State private var selection = 0
    @State private var pickerVisible = false
    @State private var remark = ""
    @State private var enableAnonymat = false
    @State private var idContext: Int = 0
    @State private var showingAlert = false

    var body: some View {
        
        VStack{
            Text("Sélectionnez le contexte : ")
            Button(contexts[selection]){
                self.pickerVisible.toggle()
            }
            .foregroundColor(self.pickerVisible ? .red : .blue)
            if pickerVisible{
                Picker(selection: $selection, label: Text("Ca s'est passé :")){
                    ForEach(0..<contexts.count){
                        Text(self.contexts[$0]).foregroundColor(.secondary)
                    }
                }.labelsHidden()
                .onTapGesture {
                    self.pickerVisible.toggle()
                }
            }
            Spacer()
            Text("Entrez la remarque : ")
            TextField("On m'a dit...", text: self.$remark)
                .cornerRadius(15.0)
                .shadow(radius: 2.0, x: 0, y: 0)
                .textFieldStyle(RoundedBorderTextFieldStyle())
            Toggle(isOn: $enableAnonymat) {
                    Text("Rester anonyme")
                }
            Spacer()
            Button(action: {
                switch self.contexts[self.selection] {
                           case "Dans la rue":
                               self.idContext = 1
                               
                           case "Dans les transports":
                               self.idContext = 2

                           case "Au travail":
                               self.idContext = 3

                           case "Au domicile":
                               self.idContext = 4
                    
                           default:
                               print("Mauvais contexte")
                }
                if (self.remark == ""){
                    self.showingAlert = true
                } else{
                    self.remarkManager.addRemark(description: self.remark, idContext: String(self.idContext), token: "")
                    self.parent.presentationMode.wrappedValue.dismiss()
                }
            }){
                Text("Soumettre")
            }.alert(isPresented: $showingAlert) {
            Alert(title: Text("Attention"), message: Text("Veuillez ne pas laisser la remarque vide"), dismissButton: .default(Text("D'accord!")))
            }
        }
    }
}
