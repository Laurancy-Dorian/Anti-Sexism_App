//
//  LoginView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 2/28/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct LoginView: View {
    
    @State private var pseudo = ""
    @State private var password = ""
    
    var body: some View {
        VStack() {
            Text("CONNEXION")
                .font(.largeTitle).foregroundColor(Color.black)
                .padding([.top, .bottom], 40)
                .shadow(radius: 10.0, x: 20, y: 10)
            
            
            VStack(alignment: .leading, spacing: 15) {
                TextField("Pseudonyme", text: self.$pseudo)
                    .cornerRadius(15.0)
                    .shadow(radius: 2.0, x: 1, y: 1)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                
                SecureField("Mot de passe", text: self.$password)
                    .cornerRadius(15.0)
                    .shadow(radius: 2.0, x: 1, y: 1)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
            }.padding([.leading, .trailing], 27.5)
            
            Button(action: {}) {
                Text("Connexion")
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
                Text("Vous n'avez pas de compte ? ")
                NavigationLink(destination: SignupView()){
                    Text("Inscrivez-vous")
                    .foregroundColor(.red)
                
                }.foregroundColor(.red)
                
            }
        }
//        .background(
//            LinearGradient(gradient: Gradient(colors: [.purple, .blue]), startPoint: .top, endPoint: .bottom)
//                .edgesIgnoringSafeArea(.all))
        
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
    }
}
