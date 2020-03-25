//
//  RemarkContextList.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

struct RemarkContextList: Decodable {
    var results: [RemarkContext]
        
    init(results : [RemarkContext]) {
        self.results = results
    }
}

struct RemarkContext: Decodable {
    var id_context : Int = 0
    var name_context : String = ""
    var color_context : String = ""
    
    //init(idRemarkContext : Int, nom : String, couleur : Int) {
        //self.idRemarkContext = idRemarkContext
        //self.nom = nom
        //self.couleur = couleur
    //}
    
    enum CodingKeys: Any, CodingKey {
        case id_context
        case name_context
        case color_context
    }
    
    init(from decoder: Decoder) throws {
    do {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        if let stringProperty = try? container.decode(String.self, forKey: .color_context) {
            color_context = stringProperty
        }
        if let stringProperty = try? container.decode(String.self, forKey: .name_context) {
            name_context = stringProperty
        }
        if let intProperty = try? container.decode(Int.self, forKey: .id_context) {
            id_context = intProperty
        }
        else {
                throw DecodingError.dataCorrupted(DecodingError.Context(codingPath: container.codingPath, debugDescription: "Not a JSON"))
            }
        }
    }
}
