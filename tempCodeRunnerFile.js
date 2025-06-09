john = { name : "john" };
let ben = { name : "ben" };

// try to use an object instead of map
visitCountObj = {};

// try to use an john object as key instead of map
visitCountObj[john] = 3;

console.log(visitCountObj);

// try to use an john object as key instead of map
visitCountObj[ben] = 13;

console.log(visitCountObj);
console.log(visitCountObj["[objet Object]"]);