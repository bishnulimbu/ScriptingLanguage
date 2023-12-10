let age = prompt(age);
let nationality = prompt(nationality);

age = parseInt(age);
if(age>18 && nationality.toLowerCase =="nepali"){
    console.log("is eligible for vote.");
}
else{
    console.log("isn't eligible for vote.");
}