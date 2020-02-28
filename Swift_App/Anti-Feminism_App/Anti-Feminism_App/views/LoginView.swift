//
//  LoginView.swift
//  Anti-Feminism_App
//
//  Created by user164247 on 2/28/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct LoginView: View {
    
    @State private var login = ""
    @State private var password = ""
    
    var body: some View {
        VStack(spacing: 15) {
      
          TextField("Login", text: self.$login)
            .padding()
            .cornerRadius(20.0)
                        
          SecureField("Password", text: self.$password)
            .padding()
            .cornerRadius(20.0)
        }.padding([.leading, .trailing], 27.5)
        
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
    }
}
