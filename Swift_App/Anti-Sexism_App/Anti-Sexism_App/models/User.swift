//
//  User.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

class User {
    var pseudo_user : String = ""
    var password_user : String = ""
    
    init(pseudo : String, password : String) {
        self.pseudo_user = pseudo
        self.password_user = password
    }
}
