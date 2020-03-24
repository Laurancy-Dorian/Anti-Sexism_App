//
//  RemarkListView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI

struct RemarkListView: View {
    
    @ObservedObject var remarkManager = RemarkManager()
    
    init() {
        UITableView.appearance().tableFooterView = UIView()
        UITableView.appearance().separatorStyle = .none
    }
    
    var body: some View {
        ZStack(alignment: .bottomTrailing) {
            List(remarkManager.remarkList.results, id: \.id_remark){ remark in
                    ZStack{
                        RemarkView(remark: remark, remarkManager: self.remarkManager)
                        NavigationLink(destination: RemarkPage(remark: remark, remarkManager:self.remarkManager)){
                        ZStack{
                           EmptyView()
                        }
                        }}.buttonStyle(PlainButtonStyle())
            }
            NavigationLink(destination: AddRemarkPage()){
                Image(systemName: "plus.circle.fill")
                    .resizable()
                    .frame(width: 70, height: 70)
                    .foregroundColor(Color(red: 153/255, green: 102/255, blue: 255/255))
                    .shadow(color: .gray, radius: 0.2, x: 1, y: 1)
                    .padding()
            }
        }
    }
}
