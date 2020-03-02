//
//  RemarkContext.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

class RemarkContext {
    var idRemarkContext : Int
    var nom : String
    var couleur : Int
    
    init(idRemarkContext : Int, nom : String, couleur : Int) {
        self.idRemarkContext = idRemarkContext
        self.nom = nom
        self.couleur = couleur
    }
}
