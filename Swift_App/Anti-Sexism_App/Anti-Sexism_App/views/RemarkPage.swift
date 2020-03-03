//
//  RemarkPage.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct RemarkPage: View {
    
    init(remark: Remark){
        self.remark = remark
    }
    
    var remark: Remark
    
    var body: some View {
        VStack{
            RemarkView(remark: remark)
            NavigationLink(destination: AddAnswerView()){
                Text("Répondre")
            }
            AnswerListView()
        }
    }
}
