//
//  MyAccountView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/10/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct MyAccountView: View {
    
//    init(user: User){
//        self.user = user
//    }
//    
//    var user: User
    @State private var password = ""
    @State private var passwordConfirm = ""
    
    var body: some View {
        VStack(spacing: 5) {
            Text("Pseudo")
                .font(.largeTitle)
            Spacer()
            VStack(alignment: .leading, spacing: 15) {
                               Text("Nouveau mot de passe")
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
                Text("Changer le mot de passe")
                    .font(.headline)
                    .foregroundColor(.white)
                    .padding()
                    .frame(width: 300, height: 50)
                    .background(Color.red)
                    .cornerRadius(15.0)
                    .shadow(radius: 10.0, x: 20, y: 10)
            }.padding(.top, 50)
            
            Spacer()
        }
    }
}
