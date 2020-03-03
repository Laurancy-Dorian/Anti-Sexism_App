//
//  HomePage.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct HomePage: View {
    
    @State var showMenu = false
    
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
                    MainView(showMenu: self.$showMenu)
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
                .navigationBarTitle("Side Menu", displayMode: .inline)
                .navigationBarItems(trailing: (
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

struct MainView: View {
    
    @Binding var showMenu: Bool
    
    var body: some View {
                VStack{
                    RemarkListView()
                }
    }
}

