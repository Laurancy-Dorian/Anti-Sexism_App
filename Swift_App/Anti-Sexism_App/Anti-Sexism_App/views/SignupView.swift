//
//  SignupView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 2/28/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct SignupView: View {
    @Environment(\.presentationMode) var presentationMode: Binding<PresentationMode>
    
    @State private var pseudo = ""
    @State private var password = ""
    @State private var passwordConfirm = ""
    
    var body: some View {
            VStack() {
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
                    SecureField("Mot de passe", text: self.$password)
                        .cornerRadius(15.0)
                        .shadow(radius: 2.0, x: 0, y: 0)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                    
                    Text("Confirmer le mot de passe")
                    SecureField("Confirmer le mot de passe", text: self.$passwordConfirm)
                    .cornerRadius(15.0)
                    .shadow(radius: 2.0, x: 0, y: 0)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                }.padding([.leading, .trailing], 27.5)
                
                Button(action: {
                    
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
                
                Spacer()
                HStack(spacing: 0) {
                    Text("Vous avez déjà un compte ? ")
                    Button(action: {self.presentationMode.wrappedValue.dismiss()} ){
                        Text("Connectez-vous")
                        .foregroundColor(.red)
                        
                    }.foregroundColor(.red)
                    
                }
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
