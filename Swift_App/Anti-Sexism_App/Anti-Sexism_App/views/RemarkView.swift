//
//  RemarkView.swift
//  Anti-Sexism_App
//
//  Created by user164247 on 3/2/20.
//  Copyright © 2020 Anthony_Dorian_Emma. All rights reserved.
//

import SwiftUI



//extension Color {
//    init(_ hex: UInt32, opacity:Double = 1.0) {
//        let red = Double((hex & 0xff0000) >> 16) / 255.0
//        let green = Double((hex & 0xff00) >> 8) / 255.0
//        let blue = Double((hex & 0xff) >> 0) / 255.0
//        self.init(.sRGB, red: red, green: green, blue: blue, opacity: opacity)
//    }
//}

func lighterColorForColor(color: UIColor) -> UIColor {

       var r:CGFloat = 0, g:CGFloat = 0, b:CGFloat = 0, a:CGFloat = 0

       if color.getRed(&r, green: &g, blue: &b, alpha: &a){
           return UIColor(red: min(r + 0.8, 1.0), green: min(g + 0.8, 1.0), blue: min(b + 0.8, 1.0), alpha: a)
       }

       return UIColor()
}

func hexStringToUIColor (hex:String) -> UIColor {
    var cString:String = hex.trimmingCharacters(in: .whitespacesAndNewlines).uppercased()

    if (cString.hasPrefix("#")) {
        cString.remove(at: cString.startIndex)
    }

    if ((cString.count) != 6) {
        return UIColor.gray
    }

    var rgbValue:UInt32 = 0
    Scanner(string: cString).scanHexInt32(&rgbValue)

    return UIColor(
        red: CGFloat((rgbValue & 0xFF0000) >> 16) / 255.0,
        green: CGFloat((rgbValue & 0x00FF00) >> 8) / 255.0,
        blue: CGFloat(rgbValue & 0x0000FF) / 255.0,
        alpha: CGFloat(1.0)
    )
}


//let hexColor:(UInt32) -> (Color) = {
//    return Color($0)
//}

struct RemarkView: View {
    
    var remark: Remark
    @ObservedObject var remarkManager: RemarkManager
    @ObservedObject var answerManager: AnswerManager
    @ObservedObject var remarkContextManager = RemarkContextManager()
    
    @State var heard: Bool = false
    @State var suffered: Bool = false
    
    init (remark: Remark, remarkManager: RemarkManager) {
        self.remark = remark
        self.remarkManager = remarkManager

        self.answerManager = AnswerManager(idRemark: String(remark.id_remark))
        self.answerManager.countAnswers(idRemark: String(remark.id_remark))
        
    }
    
    func getColorContext() -> String {
        var hexa : String = "000000"
        for context in self.remarkContextManager.remarkContextList.results {
            if (context.id_context == remark.id_context){
                hexa = context.color_context.components(separatedBy: "#")[1]
                //print("\(hexa)")
            }
        }
        return hexa
    }
    
    func find(value searchValue: Int, in array: [Int]) -> Int? {
        for (index, value) in array.enumerated()
        {
            if value == searchValue {
                return index
            }
        }
        return nil
    }
    
    var body: some View {

        VStack(spacing: 5) {
            HStack {
                HStack {
                    if (remark.pseudo_user == "") {Text("Post Anonyme")}
                    else { Text ("Par " + (remark.pseudo_user))}
                    Spacer()
                    Text (remark.date_remark.components(separatedBy: "T")[0])
                }
                .padding()
            }.background(Color(hexStringToUIColor( hex : self.getColorContext())))
            .foregroundColor(.white)
            HStack {
                Text (remark.description_remark)
            }
            .padding()
            HStack () {
                Button(action: {
                    if self.find(value: self.remark.id_remark, in: ContentView.entendu) != nil{
                        self.heard = true
                    }
                    if (!self.heard){
                        self.remarkManager.heardRemark(idRemark: String(self.remark.id_remark))
                        self.heard = true
                        ContentView.entendu.append(self.remark.id_remark)
                    } else{
                        self.remarkManager.unheardRemark(idRemark: String(self.remark.id_remark))
                        self.heard = false
                        guard let index = self.find(value: self.remark.id_remark, in: ContentView.entendu) else {return}
                        ContentView.entendu.remove(at: index)
                    }
                }) {
                    HStack (spacing : 0) {
                        Text("Déja Entendu")
                        Spacer()
                        Text (String(remark.nb_seen_remark))
                    }
                    .font(.headline)
                    .foregroundColor(.white)
                    .padding(5)
                    .shadow(radius: 5)
                    .background(Color.blue)
                    .cornerRadius(15)
                }
                .buttonStyle(PlainButtonStyle())
                Spacer()
                Button(action: {
                    if self.find(value: self.remark.id_remark, in: ContentView.subi) != nil{
                        self.suffered = true
                    }
                    if (!self.suffered){
                        self.remarkManager.sufferedRemark(idRemark: String(self.remark.id_remark))
                        self.suffered = true
                        ContentView.subi.append(self.remark.id_remark)
                    } else{
                        self.remarkManager.unsufferedRemark(idRemark: String(self.remark.id_remark))
                        self.suffered = false
                        guard let index = self.find(value: self.remark.id_remark, in: ContentView.subi) else {return}
                        ContentView.subi.remove(at: index)
                    }
                }) {
                    HStack (spacing : 0) {
                        Text("Déja Subi")
                        Spacer()
                        Text (String(remark.nb_suffered_remark))
                    }
                    .buttonStyle(PlainButtonStyle())
                    .font(.headline)
                    .foregroundColor(.white)
                    .padding(5)
                    .shadow(radius: 5)
                    .background(Color.red)
                    .cornerRadius(15)
                }
                .buttonStyle(PlainButtonStyle())
            }
            .padding(.leading)
            .padding(.trailing)
            HStack {
                Spacer()
                Text("\(answerManager.nbAnswers)")
                Image(systemName: "message")
            }
            .padding()
        }
        
        .background(
            Color(
                lighterColorForColor(
                    color : hexStringToUIColor( hex : self.getColorContext())
            )))
        .cornerRadius(25)
    }

}
