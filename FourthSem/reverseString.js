function reverseString(str){
    let reversed = " ";
    let i = str.length - 1;
    do {
        reversed += str[i];
        i--;
    }while (i>=0);
    return reversed;
}
let word = "Defined";
let reversed = reverseString(word);
console.log("original word :", word);
console.log("reversed word :", reversed);