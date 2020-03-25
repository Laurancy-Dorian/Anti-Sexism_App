//
//  ContentView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 2/28/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct ContentView: View {
    
    static var entendu = [Int]()
    static var subi = [Int]()
    static var pertinent = [Int]()
    static var pasPertinent = [Int]()
    
    var body: some View {
        HomePage(idContext: "")
    }
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
