//
//  AddRemarkPage.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/11/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct AddRemarkPage: View {
    @Environment(\.presentationMode) var presentationMode: Binding<PresentationMode>
    
    @ObservedObject var remarkManager: RemarkManager
    
    @State var showMenu = false
    @State var text = ""
    
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
                    AddRemarkContent(showMenu: self.$showMenu, parent: self, remarkManager: self.remarkManager)
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
                        //TODO: change navigation link
                        NavigationLink(destination: HomePage(idContext: "").navigationBarBackButtonHidden(false)){
                            Button(action: {
                                self.presentationMode.wrappedValue.dismiss()
                            }){
                                Image("Logo")
                                .resizable()
                                .frame(width: 70.0, height: 70.0)
                                .foregroundColor(.black)
                            }
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

struct AddRemarkContent: View {
   
    @Binding var showMenu: Bool
    var parent : AddRemarkPage!
    var remarkManager: RemarkManager
    
    var body: some View {
        AddRemarkView(parent: self.parent, remarkManager: self.remarkManager)
    }
}
