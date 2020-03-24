//
//  RemarkPage.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/3/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct RemarkPage: View {
    
    var remark: Remark
    
    init(remark: Remark){
        self.remark = remark
    }
    
    var body: some View {
        VStack{
            RemarkView(remark: remark).padding()
            NavigationLink(destination: AddAnswerPage(idRemark: remark.id_remark)){
                Text("Répondre")
                    .frame(width: 100, height: 25, alignment: .center)
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(20)
            }
            AnswerListView(idRemark: remark.id_remark)
        }
    }
}
