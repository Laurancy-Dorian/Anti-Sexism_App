//
//  RemarkList.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

struct RemarkList: Decodable{
    var results: [Remark]
    
    init(results : [Remark]) {
        self.results = results
    }
}

struct Remark: Decodable {
    var id_remark : Int = 0
    var description_remark : String = ""
    var nb_seen_remark : Int = 0
    var nb_suffered_remark : Int = 0
    var date_remark : String = ""
    var pseudo_user : String = ""
    var id_context : Int = 0
    
    //init (id_remark : Int, description_remark : String, nb_seen_remark : Int, nb_suffered_remark : Int, pseudo_user : String, date : String, id_context : Int) {
        //self.id_remark = id_remark
        //self.description_remark = description_remark
        //self.nb_seen_remark = nb_seen_remark
        //self.nb_suffered_remark = nb_suffered_remark
        //self.pseudo_user = pseudo_user
        //self.date = date
        //self.id_context = id_context
    //}
    
    enum CodingKeys: Any, CodingKey {
        case id_remark
        case description_remark
        case nb_seen_remark
        case nb_suffered_remark
        case date_remark
        case pseudo_user
        case id_context
    }
    
    init(from decoder: Decoder) throws {
        do {
            let container = try decoder.container(keyedBy: CodingKeys.self)
            if let stringProperty = try? container.decode(String.self, forKey: .description_remark) {
                description_remark = stringProperty
            }
            if let stringProperty = try? container.decode(String.self, forKey: .date_remark) {
                date_remark = stringProperty
            }
            if let stringProperty = try? container.decode(String.self, forKey: .pseudo_user) {
                pseudo_user = stringProperty
            }
            if let intProperty = try? container.decode(Int.self, forKey: .id_remark) {
                id_remark = intProperty
            }
            if let intProperty = try? container.decode(Int.self, forKey: .nb_seen_remark) {
                nb_seen_remark = intProperty
            }
            if let intProperty = try? container.decode(Int.self, forKey: .nb_suffered_remark) {
                nb_suffered_remark = intProperty
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
