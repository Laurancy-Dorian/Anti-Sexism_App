//
//  RemarkContextList.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

class RemarkContextList {
     @Published var listContexts : [RemarkContext] = []
    
    init() {
        listContexts.append(RemarkContext(idRemarkContext: 1, nom: "Dans la rue", couleur: 1))
        listContexts.append(RemarkContext(idRemarkContext: 2, nom: "Dans les transports", couleur: 1))
        listContexts.append(RemarkContext(idRemarkContext: 3, nom: "Au travail", couleur: 1))
        listContexts.append(RemarkContext(idRemarkContext: 4, nom: "Au domicile", couleur: 1))
    }
}
