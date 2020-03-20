//
//  AnswerList.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import Foundation

struct AnswerList: Decodable {
    
    var results : [Answer] = []
   
    init(results : [Answer]) {
        self.results = results
    }
}

struct Answer: Decodable {
    var id_response : Int = 0
    var description_response : String = ""
    var nb_likes_response : Int = 0
    var nb_dislikes_response : Int = 0
    var date_response : String = ""
    var pseudo_user : String = ""
    var id_remark : Int = 0
    var id_response_type : Int = 0
    
    enum CodingKeys: Any, CodingKey {
        case id_response
        case description_response
        case nb_likes_response
        case nb_dislikes_response
        case date_response
        case pseudo_user
        case id_remark
        case id_response_type
    }
    
    init(from decoder: Decoder) throws {
        do {
            let container = try decoder.container(keyedBy: CodingKeys.self)
            if let stringProperty = try? container.decode(String.self, forKey: .description_response) {
                description_response = stringProperty
            }
            if let stringProperty = try? container.decode(String.self, forKey: .date_response) {
                date_response = stringProperty
            }
            if let stringProperty = try? container.decode(String.self, forKey: .pseudo_user) {
                pseudo_user = stringProperty
            }
            if let intProperty = try? container.decode(Int.self, forKey: .id_response) {
                id_response = intProperty
            }
            if let intProperty = try? container.decode(Int.self, forKey: .nb_likes_response) {
                nb_likes_response = intProperty
            }
            if let intProperty = try? container.decode(Int.self, forKey: .nb_dislikes_response) {
                nb_dislikes_response = intProperty
            }
            if let intProperty = try? container.decode(Int.self, forKey: .id_remark) {
                id_remark = intProperty
            }
            if let intProperty = try? container.decode(Int.self, forKey: .id_response_type) {
                id_response_type = intProperty
            }
            else {
                throw DecodingError.dataCorrupted(DecodingError.Context(codingPath: container.codingPath, debugDescription: "Not a JSON"))
            }
        }
    }
}
