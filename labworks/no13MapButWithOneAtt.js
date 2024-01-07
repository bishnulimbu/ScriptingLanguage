const students = [
  {name : 'ram' ,age: 16 },
  {name : 'sam' ,age: 17 },
  {name : 'hari' ,age: 18 },
];
console.log(students);

const ageOnly = students.map(function (student){
  return student.age;
});

console.log('age : '+ ageOnly);
