let name1 = "roshan";
let length1 = name1.length;
let rev = '';
console.log(name1);
function reversed(name1){
  let i = name1.length -1;
  do {
    rev = rev + name1[i];
    i--;
  } while (i >=0);
  return rev;
}
rev = reversed(name1);
console.log(rev);
