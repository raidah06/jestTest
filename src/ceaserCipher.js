const Caesar=(()=>{
    const addToChar=(offset,letter)=>{
        return String.fromCharCode(letter.charCodeAt(0)+offset)
    }
    const isBetween=(letter,start,end)=>{
        return letter >=start && letter <= end
    }
    const isLowercase=letter=>{
        return isBetween(letter,'a','z')
    }
    const isUpperCase=letter=>{
        return isBetween(letter,'A','Z')
    }
    const makeLetterBetween=(letter,lower,upper)=>{
        if(letter<lower){
            return addToChat(-(lower.charCodeAt(0)-letter.charCodeAt-1),upper)
        }else if (letter>upper){
            return addToChar(letter.charCodeAt(0)-1-upper.charCodeAt(0),lower)
        }else{
            return letter
        }
    }
    const letterCipher=(letter,_offset)=>{
        const offset=_offset%26
        const start=isLowercase(letter)?'a':'A'
        const end=addToChar(25,start)
        if (isLowercase(letter)||isUpperCase(letter)){
            return makeLetterBetween(addToChar(offset,letter),start,end)
        }else{
            return letter
        }
    }
    const cipher = (text, offset) => {
        return text
          .split('')
          .map((letter, i) => letterCipher(letter, offset))
          .join('')
    }
    const decipher = (text, offset) => {
        return cipher(text, -offset)
    }
    return {
        cipher,
        decipher
    }
})()
    
export default Caesar
