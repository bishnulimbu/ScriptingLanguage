let percent = prompt("enter you percentage");
percent = parseFloat(percent);

if(percent >= 90){
    console.log("A+ Grade");
}
else if(percent >= 80){
    console.log("A Grade");
}
else if(percent >= 70){
    console.log("B+ Grade");
}
else if(percent >= 60){
    console.log("B Grade");
}
else if(percent >= 50){
    console.log("C+ Grade");
}
else if(percent > 40){
    console.log("C Grade");
}
else{
    console.log("you failed.")
}