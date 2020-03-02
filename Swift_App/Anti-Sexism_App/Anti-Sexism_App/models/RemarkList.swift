//
//  RemarkList.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

class RemarkList {
    
    @Published var listRemarks : [Remark] = []
    
    init(){
        listRemarks.append(Remark(idRemark: 1, description: "Une phrase", seen: 15, suffered: 4, user: User(pseudo : "toto", password: "1234"), date: "12/12/2012", context: RemarkContext(idRemarkContext: 1, nom: "Dans la rue", couleur: 1)))
        listRemarks.append(Remark(idRemark: 2, description: "Une deuxième", seen: 5, suffered: 6, user: User(pseudo : "tata", password: "1234"), date: "12/12/2012", context : RemarkContext(idRemarkContext: 1, nom: "Dans la rue", couleur: 1)))
        listRemarks.append(Remark(idRemark: 3, description: "Une troisième", seen: 6, suffered: 8, user: User(pseudo : "titi", password: "1234"), date: "12/12/2012", context : RemarkContext(idRemarkContext: 1, nom: "Dans la rue", couleur: 1)))
        listRemarks.append(Remark(idRemark: 4, description: "Une sentence", seen: 29, suffered: 1, user: User(pseudo : "tutu", password: "1234"), date: "12/12/2012", context : RemarkContext(idRemarkContext: 1, nom: "Dans la rue", couleur: 1)))
        listRemarks.append(Remark(idRemark: 5, description: "Une dernière", seen: 11, suffered: 8, user: User(pseudo : "toto", password: "1234"), date: "12/12/2012", context : RemarkContext(idRemarkContext: 1, nom: "Dans la rue", couleur: 1)))
    }
}
