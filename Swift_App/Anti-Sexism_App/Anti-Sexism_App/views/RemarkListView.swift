//
//  RemarkListView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct RemarkListView: View {
    
    var remarkList : RemarkList
    @State private var searchQuery: String = ""
    
    init() {
        remarkList = RemarkList()
    }
    
    var body: some View {
        ZStack(alignment: .bottomTrailing) {
                List{
                    Section(header: HeaderView(text: self.$searchQuery)) {
                        ForEach(self.remarkList.listRemarks) { remark in
                            NavigationLink(destination: RemarkView(remark: remark)){
                                RemarkView(remark: remark)
                            }
                        }.padding()
                    }
                }
            Button(action: {
            }) {
                Image(systemName: "plus.circle.fill")
                    .resizable()
                    .frame(width: 70, height: 70)
                    .foregroundColor(Color(red: 153/255, green: 102/255, blue: 255/255))
                    .shadow(color: .gray, radius: 0.2, x: 1, y: 1)
            }
        }
    }
}

struct RemarkListView_Previews: PreviewProvider {
    static var previews: some View {
        RemarkListView()
    }
}
