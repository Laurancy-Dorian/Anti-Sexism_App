//
//  SignupView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 2/28/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

enum ActiveAlert2 {
    case first, second, third, fourth, fifth, sixth
}

struct SignupView: View {
    @Environment(\.presentationMode) var presentationMode: Binding<PresentationMode>
    @ObservedObject var userManager = UserManager()
    
    @State private var pseudo = ""
    @State private var password = ""
    @State private var passwordConfirm = ""
    @State private var showingAlert = false
    @State private var activeAlert: ActiveAlert2 = .first
    
    var body: some View {
            VStack() {
                Image("Logo")
                .resizable()
                .frame(width: 120.0, height: 120.0)
                Text("INSCRIPTION")
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
                    TextField("Mot de passe", text: self.$password)
                        .cornerRadius(15.0)
                        .shadow(radius: 2.0, x: 0, y: 0)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    
                    Text("Confirmer le mot de passe")
                    TextField("Confirmer le mot de passe", text: self.$passwordConfirm)
                    .cornerRadius(15.0)
                    .shadow(radius: 2.0, x: 0, y: 0)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                }.padding([.leading, .trailing], 27.5)
                
                Button(action: {
                    if (self.pseudo == "" || self.password == "" || self.passwordConfirm == ""){
                        self.activeAlert = .first
                        self.showingAlert = true
                    } else if (self.password != self.passwordConfirm){
                        self.activeAlert = .second
                        self.showingAlert = true
                    } else if (self.pseudo.count < 4){
                        self.activeAlert = .third
                        self.showingAlert = true
                    } else if (self.password.count < 5){
                        self.activeAlert = .fourth
                        self.showingAlert = true
                    } else{
                        self.userManager.SignIn(pseudo: self.pseudo, password: self.password, callback: {token -> Void in
                            if (token == "error") {
                                self.activeAlert = .fifth
                                self.showingAlert = true
                            } else {
                                self.activeAlert = .sixth
                                self.showingAlert = true
                                self.presentationMode.wrappedValue.dismiss()
                            }
                        })
                    }
                }) {
                    Text("Inscription")
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
                        case .third:
                                return Alert(title: Text("Attention"), message: Text("Votre pseudo doit faire 4 caracteres minimum"), dismissButton: .default(Text("D'accord!")))
                        case .fourth:
                                return Alert(title: Text("Attention"), message: Text("Votre mot de passe doit faire 5 caracteres minimum"), dismissButton: .default(Text("D'accord!")))
                        case .fifth:
                                return Alert(title: Text("Attention"), message: Text("Il existe deja un compte avec cette adresse"), dismissButton: .default(Text("D'accord!")))
                        case .sixth:
                                return Alert(title: Text("Attention"), message: Text("Votre compte a ete cree !"), dismissButton: .default(Text("D'accord!")))
                    }
                }
                Spacer()
            }
    //        .background(
    //            LinearGradient(gradient: Gradient(colors: [.purple, .blue]), startPoint: .top, endPoint: .bottom)
    //                .edgesIgnoringSafeArea(.all))
            
        }
}

struct SignupView_Previews: PreviewProvider {
    static var previews: some View {
        SignupView()
    }
}
