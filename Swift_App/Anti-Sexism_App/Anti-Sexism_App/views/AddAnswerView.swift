//
//  AddAnswerView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct AddAnswerView: View {
    @State private var types = ["Funny", "Angry", "Irony", "Nerd"]
    @State private var selection = 0
    @State private var pickerVisible = false
    @State private var response = ""
    @State private var enableAnonymat = false
    var body: some View {
        VStack{
            Text("Sélectionnez le type de réponse: ")
            Button(types[selection]){
                self.pickerVisible.toggle()
            }
            .foregroundColor(self.pickerVisible ? .red : .blue)
            if pickerVisible{
                Picker(selection: $selection, label: Text("Ton de la réponse :")){
                    ForEach(0..<types.count){
                        Text(self.types[$0]).foregroundColor(.secondary)
                    }
                }
                .onTapGesture {
                    self.pickerVisible.toggle()
                }
            }
            TextField("Réponds-lui...", text: self.$response)
                .cornerRadius(15.0)
                .shadow(radius: 2.0, x: 0, y: 0)
                .textFieldStyle(RoundedBorderTextFieldStyle())
            Toggle(isOn: $enableAnonymat) {
                Text("Rester anonyme")
            }
            Spacer()
            Button(action: {}){
                Text("Soumettre")
            }
        }
    }
}
