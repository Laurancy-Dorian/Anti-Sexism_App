//
//  LoginView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 2/28/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

enum ActiveAlert {
    case first, second
}

struct LoginView: View {
    @Environment(\.presentationMode) var presentationMode: Binding<PresentationMode>
    @ObservedObject var userManager = UserManager()
    
    @State private var pseudo = ""
    @State private var password = ""
    @State private var showingAlert = false
    @State private var activeAlert: ActiveAlert = .first
    @EnvironmentObject var token: Token
    
    var body: some View {
        VStack() {
            Image("Logo")
                .resizable()
                .frame(width: 120.0, height: 120.0)
            Text("CONNEXION")
                .font(.largeTitle).foregroundColor(Color.black)
                .padding([.top, .bottom], 40)
                .shadow(radius: 10.0, x: 20, y: 10)
            
            VStack(alignment: .leading, spacing: 15) {
                Text("Nom d'utilisateur")
                TextField("Pseudonyme", text: self.$pseudo)
                    .cornerRadius(15.0)
                    .shadow(radius: 2.0, x: 0, y: 0)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                
                Text("Mot de passe")
                SecureField("Mot de passe", text: self.$password)
                    .cornerRadius(15.0)
                    .shadow(radius: 2.0, x: 0, y: 0)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
            }.padding([.leading, .trailing], 27.5)
            
            Button(action: {
                if (self.pseudo == "" || self.password == ""){
                    self.activeAlert = .first
                    self.showingAlert = true
                } else{
                    self.userManager.Login(pseudo: self.pseudo, password: self.password, callback: {
                        if self.token.$value == "" {
                            self.activeAlert = .second
                            self.showingAlert = true
                            return
                        } else {
                            self.presentationMode.wrappedValue.dismiss()
                        }
                    })
                }
            }) {
                Text("Connexion")
                    .font(.headline)
                    .foregroundColor(.white)
                    .padding()
                    .frame(width: 300, height: 50)
                    .background(Color.red)
                    .cornerRadius(15.0)
                    .shadow(radius: 10.0, x: 20, y: 10)
            }.padding(.top, 50)
            .alert(isPresented: $showingAlert) {
                switch activeAlert {
                    case .first:
                            return Alert(title: Text("Attention"), message: Text("Veuillez ne pas laisser les champs vides"), dismissButton: .default(Text("D'accord!")))
                    case .second:
                            return Alert(title: Text("Attention"), message: Text("Vos infromations sont incorrectes"), dismissButton: .default(Text("D'accord!")))
                }
            }
            Spacer()
        }
//        .background(
//            LinearGradient(gradient: Gradient(colors: [.purple, .blue]), startPoint: .top, endPoint: .bottom)
//                .edgesIgnoringSafeArea(.all))
        
    }
}
