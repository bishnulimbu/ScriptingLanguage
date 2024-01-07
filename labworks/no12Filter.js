const array = ['apple','Apple','ape', 'Ape'];
console.log(array);

const newArray = array.filter(function (str){
  return !str.startsWith('A');
});
console.log(newArray);
