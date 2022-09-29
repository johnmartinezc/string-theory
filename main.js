function xify(str){
let newStr = ""

for(let i = 1; i < str.length; i++){
    newStr += "x"
} 
return newStr
}
console.log(xify("hello"))

console.log("\n")


function yellingChars(str1){
    let newStr1 = ""

    for(let i = 0; i < str1.length; i++){
        newStr1 += str1[i] + "!"

    }
return newStr1

}

console.log(yellingChars("hello"))

console.log("\n")


function indexedChars(str2){

    let newStr1 = ""
    for(let i = 0; i < str2.length; i++){
        newStr1 += i
        newStr1 += str2[i]
        
        
}
return newStr1

}
console.log(indexedChars("hello"))
console.log("\n")


function exclaim(sent){
    let new1 = ""

    for(let i = 0; i < sent.length; i++){

        if(sent[i] === "?" || sent[i] === "."){
                new1 += "!"
        
            }else{
                new1 += sent[i]

        }
    
    }
return new1
}
console.log(exclaim("What are you doing. Are you a fool?"))

console.log("\n")


function truncate(strr){
    let news = ""

    for(let i = 0; i < 15 ; i++){
        news += strr[i]
    }
        return news + "..."
}
console.log(truncate("what would you do if the letters were greater the time itself."))

console.log("\n")


function ciEmailify(sti){
    
    let n = ""
        for(let i = 0; i < sti.length ; i++){
           if(sti[i] === " "){
                    n += "."
           }else{
            n += sti[i]
           }
        }
        // n += "@codeimmersives.com"
        return n.toLowerCase() + "@codeimmersives.com"
}

console.log(ciEmailify("John Martinez"))
console.log("\n")


function reverse(rev){
    newstrg =""
    for(let i = rev.length - 1; i>= 0; i--){
    newstrg += rev[i]
    }

return newstrg
}

console.log(reverse("uoy evol i lla ih"))

console.log("\n")


function onlyVowels(vow){
   let only = ""
    
    for(let i = 0; i < vow.length ; i++){
        if(vow[i] === "a" || vow[i] === "e"||vow[i] === "i" || vow[i] === "o"|| vow[i] === "u"|| vow[i] === "y" ||
           vow[i] === "A" || vow[i] === "E"||vow[i] === "I" || vow[i] === "O"|| vow[i] === "U"|| vow[i] === "Y"){
            only += vow[i]
        }
    }
return only
}

console.log(onlyVowels("john martinez"))
console.log(onlyVowels("Anthony DeRosa"))
