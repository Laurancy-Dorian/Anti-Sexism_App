//
//  AddRemarkView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct AddRemarkView: View {
    @State private var contexts = ["Dans la rue", "Dans les transports", "Au travail", "Au domicile"]
    @State private var selection = 0
    @State private var pickerVisible = false
    @State private var remark = ""
    @State private var enableAnonymat = false
    var body: some View {
        VStack{
            Text("Sélectionnez le contexte: ")
            Button(contexts[selection]){
                self.pickerVisible.toggle()
            }
            .foregroundColor(self.pickerVisible ? .red : .blue)
            if pickerVisible{
                Picker(selection: $selection, label: Text("Ca s'est passé :")){
                    ForEach(0..<contexts.count){
                        Text(self.contexts[$0]).foregroundColor(.secondary)
                    }
                }
                .onTapGesture {
                    self.pickerVisible.toggle()
                }
            }
            Spacer()
            Text("Remarque")
            TextField("On m'a dit...", text: self.$remark)
                .cornerRadius(15.0)
                .shadow(radius: 2.0, x: 0, y: 0)
                .textFieldStyle(RoundedBorderTextFieldStyle())
            Toggle(isOn: $enableAnonymat) {
                    Text("Rester anonyme")
                }
            Spacer()
            Button(action: {

            }){
                Text("Soumettre")
                
            }
        }
    }
}

struct AddRemarkView_Previews: PreviewProvider {
    static var previews: some View {
        AddRemarkView()
    }
}
