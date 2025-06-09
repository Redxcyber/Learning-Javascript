// -----> way of creating empty object

// let user = new Object();
// let admin = {};
// console.log(user);
// console.log(admin);






//-------> Obect with properties

// let user = {
//     name : "Pranav",
//     age : 20,
//     adress : "Hardoi"
// };







//-------> Obect with properties
// let user = {
//     name : "Pranav",
//     age : 20,
//     adress : "Hardoi",
//     "like birds" : true, //Multiword property must be quoted
//     rollNo : 32, // last property may end with comma too
// };
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.adress);
//console.log(user."like birds"); // cant access multi word key using dot









//-------> Add property to the object

// user.isAdmin = true;
// console.log(user);







//-------> Delete property of object
// delete user.adress;
// console.log(user);







//-------> set, get, delete multi word property
// user["love tea"] = true;
// console.log(user["love tea"]);
// delete user["love tea"];






//-------> [] also provide way to get property using variable name
// let key = "age";
// console.log(user.key); // looks for user["key"] (a property named "key")
// console.log(user[key]); // looks for user["age"] (because key = "age")






//--------> Computed properties
// let fruit = "apple";
// let bag = {
//     banana : 20,
//     [fruit] : 30,
//     [fruit + "Computers"] : 40
// };
// console.log(bag);










//-------> Property value shorthand
// function makeUser(name, age) {
//     return {
//         name : name,
//         age : age
//     }
// }
// let user = makeUser("pranav", 23);
// console.log(user);

// function makeUser(name, age) {
//     return {
//         name,
//         age,
//         roll : 20
//     }
// }
// let user = makeUser("pranav", 23);
// console.log(user);










//--------> Property name limitation
// let obj = {
//     for : 1,
//     if : 2,
//     return : 3,
//     777 : 2
// };
// console.log(`${obj.for +  obj.if + obj.return + obj[777]}`);
// console.log(obj);
// console.log(obj[777]);
// console.log(obj["777"]);










//-------> Existance of property using "in" operator
// let user = {
//     name : "Pranav",
//     age : 25,
//     roll : 42,
// };

// console.log(user.name);
// console.log(user.noSuchPropertyExist);

// console.log("name" in user);
// console.log("noProperty" in user);
// // console.log(age in user); //--> error

// let key = "age";
// console.log(key in user);













//---------> Traverse all keys of an object : for..in loop
// let user = {
//     name : "Pranav",
//     age : 30,
//     isAdmin : true,
// };
// for (let key in user) {
//     console.log(`${key} : ${user[key]}`); // dot operator will not work
// }











//-------> Ordered properties in object : only integer properties are odered 
// let codes = {
//     "91" : "India",
//     "1" : "USA",
//     "49" : "Germany",
// }

// console.log(codes);

// for(let prop in codes){
//     console.log(`${prop} : ${codes[prop]}`); // dot operator will not work
// }











//-------> If we want to preserve the same order then make integer as string
// let codes = {
//     "+91" : "India",
//     "+1" : "USA",
//     "+49" : "Germany",
// }

// console.log(codes);

// for(let prop in codes){
//     console.log(`${prop} : ${codes[prop]}`); // dot operator will not work
// }












//----> Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// function isEmpty(schedule) {
//     for(let key in schedule){
//         return false;
//     }
//     return true;
// }

// let schedule = {};
// console.log(schedule);
// console.log(isEmpty(schedule));

// schedule["6:00"] = "get up";
// console.log(schedule);
// console.log(isEmpty(schedule));











//---------> Sum object properties
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum);












//---------> Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof menu[key] == "number") {
//             //menu[key] = 2 * menu[key];
//             menu[key] *= 2;
//         }
//     }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);









//---------> Doubt

let user = {
    name : "Pranav",
    age : 20,
};

let key = "age";
console.log(user[key]);
user[key] *= 2;
console.log(user[key]);
