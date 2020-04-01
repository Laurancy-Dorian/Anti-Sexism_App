//
//  HeaderView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct HeaderView: View {

    @State var text = ""
    @EnvironmentObject var token: Token

    var body: some View{
        VStack() {
            VStack(alignment: .leading, spacing: 30){
                Text("CATEGORIE")
                .foregroundColor(.gray)
                .font(.headline)
                NavigationLink(destination: HomePage(idContext: "1")){
                    HStack {
                        Image(systemName: "map")
                            .foregroundColor(.red)
                            .imageScale(.large)
                        Text("Dans la rue")
                            .foregroundColor(.red)
                            .font(.headline)
                    }
                }
                NavigationLink(destination: HomePage(idContext: "2")){
                    HStack {
                        Image(systemName: "desktopcomputer")
                            .foregroundColor(.blue)
                            .imageScale(.large)
                        Text("Au travail")
                            .foregroundColor(.blue)
                            .font(.headline)
                    }
                }
                NavigationLink(destination: HomePage(idContext: "3")){
                    HStack {
                        Image(systemName: "tram.fill")
                            .foregroundColor(.orange)
                            .imageScale(.large)
                        Text("Dans les transports")
                            .foregroundColor(.orange)
                            .font(.headline)
                    }
                }
                NavigationLink(destination: HomePage(idContext: "4")){
                    HStack {
                        Image(systemName: "house.fill")
                            .foregroundColor(.green)
                            .imageScale(.large)
                        Text("Au domicile")
                            .foregroundColor(.green)
                            .font(.headline)
                    }
                }
            }
            .padding(.top, 100)
            VStack(alignment: .leading, spacing: 30) {
                Text("PARAMETRE")
                .foregroundColor(.gray)
                .font(.headline)
                .padding(.top, 30)
                if self.token.value == "" {
                    NavigationLink(destination: LoginView()){
                        HStack {
                            Image(systemName: "person.circle")
                                .foregroundColor(.gray)
                                .imageScale(.large)
                            Text("Se connecter")
                                .foregroundColor(.gray)
                                .font(.headline)
                        }
                    }
                    NavigationLink(destination: SignupView()){
                        HStack {
                            Image(systemName: "person.crop.circle.badge.plus")
                                .foregroundColor(.gray)
                                .imageScale(.large)
                            Text("S'inscrire")
                                .foregroundColor(.gray)
                                .font(.headline)
                        }
                    }
                } else {
                    Button(action: {
                        UserManager().LogOut()
                    }){
                        HStack {
                            Image(systemName: "power")
                                .foregroundColor(.gray)
                                .imageScale(.large)
                            Text("Déconnexion")
                                .foregroundColor(.red)
                                .font(.headline)
                        }
                    }
                }
                
                //HStack {
                //    Image(systemName: "gear")
                //        .foregroundColor(.gray)
                //        .imageScale(.large)
                //    Text("A propos")
                //        .foregroundColor(.gray)
                //        .font(.headline)
                //}
            }
            Spacer()
        }
            .padding()
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(Color(red: 32/255, green: 32/255, blue: 32/255))
            .edgesIgnoringSafeArea(.all)
    }
}
