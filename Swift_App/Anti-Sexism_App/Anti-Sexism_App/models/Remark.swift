//
//  Remark.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

class Remark: Identifiable {
    var idRemark : Int
    var description : String
    var seen : Int
    var suffered : Int
    var user : User
    var date : String
    var context : RemarkContext
    
    init (idRemark : Int, description : String, seen : Int, suffered : Int, user : User, date : String, context : RemarkContext) {
        self.idRemark = idRemark
        self.description = description
        self.seen = seen
        self.suffered = suffered
        self.user = user
        self.date = date
        self.context = context
    }
}

