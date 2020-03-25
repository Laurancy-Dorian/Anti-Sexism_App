//
//  HomePage.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct HomePage: View {
    
    @Environment(\.presentationMode) var presentationMode: Binding<PresentationMode>
    
    @State var showMenu = false
    @State var text = ""
    
    var idContext: String
    
    var body: some View {
        let drag = DragGesture()
            .onEnded {
                if $0.translation.width < -100 {
                    withAnimation {
                        self.showMenu = false
                    }
                }
            }
        return NavigationView {
            GeometryReader { geometry in
                ZStack(alignment: .trailing) {
                    HomeContent(showMenu: self.$showMenu, idContext: self.idContext)
                        .frame(width: geometry.size.width, height: geometry.size.height)
                        .disabled(self.showMenu ? true : false)
                    if self.showMenu {
                        HeaderView()
                            .frame(width: geometry.size.width/2)
                            .transition(.move(edge: .trailing))
                    }
                }
                    .gesture(drag)
            }
                .navigationBarItems(leading: (
                    HStack{
                        Button(action: {}){
                            Image("Logo")
                            .resizable()
                            .frame(width: 70.0, height: 70.0)
                            .foregroundColor(.black)
                        }
                        Spacer()
                        HStack {
                            Image(systemName: "magnifyingglass")
                            TextField("Recherche", text: self.$text)
                            .frame(width: 200, height: 1)
                        }
                        .padding()
                        .overlay(RoundedRectangle(cornerRadius: 20).stroke(lineWidth: 2).foregroundColor(Color.black))
                    }
                ),trailing: (
                    Button(action: {
                        withAnimation {
                            self.showMenu.toggle()
                        }
                    }) {
                        Image(systemName: "line.horizontal.3")
                            .imageScale(.large)
                    }
                ))
        }
    }
}

struct HomeContent: View {
    
    @Binding var showMenu: Bool
    var idContext: String
    
    var body: some View {
        RemarkListView(idContext: idContext)
    }
}

