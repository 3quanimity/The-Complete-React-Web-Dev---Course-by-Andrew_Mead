var nameVar = "Haythem"; // var: fn scoped
var nameVar = "Mostfa";
console.log("nameVar", nameVar);

let nameLet = "Haythem"; // let: fn & block scoped + can't redeclare
nameLet = "Mostfa";
console.log("nameLet", nameLet);

const nameConst = "Haythem"; // const: fn & block scoped + can't redeclare or reassign
console.log("nameConst", nameConst);
