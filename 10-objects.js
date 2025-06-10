// -----> way of creating empty object

let user = new Object();
let admin = {};
console.log(user);
console.log(admin);
console.log("\n");






//-------> Obect with properties

user = {
    name : "Pranav",
    age : 20,
    adress : "Hardoi"
};
console.log(user);
console.log("\n");







//-------> Obect with properties
user = {
    name : "Pranav",
    age : 20,
    adress : "Hardoi",
    "like birds" : true, //Multiword property must be quoted
    rollNo : 32, // last property may end with comma too
};
console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.adress);
//console.log(user."like birds"); // cant access multi word key using dot
console.log("\n");








//-------> Add property to the object

user.isAdmin = true;
console.log(user);
console.log("\n");







//-------> Delete property of object
delete user.adress;
console.log(user);
console.log("\n");







//-------> set, get, delete multi word property
user["love tea"] = true;
console.log(user);

console.log(user["love tea"]);

delete user["love tea"];
console.log("\n");






//-------> [] also provide way to get property using variable name
key = "age";
console.log(user.key); // looks for user["key"] (a property named "key") - undefined
console.log(user[key]); // looks for user["age"] (because key = "age") - 20
console.log("\n");






//--------> Computed properties
let fruit = "apple";
let bag = {
    banana : 20,
    [fruit] : 30,
    [fruit + "Computers"] : 40
};
console.log(bag);
console.log("\n");










//-------> Property value shorthand
function makeUser(name, age) {
    return {
        name : name,
        age : age
    }
}
user = makeUser("pranav", 23);
console.log(user);

//shorthand for above code
function makeUserShort(name, age) {
    return {
        name,
        age,
        roll : 20 //can add more property externally
    }
}
user = makeUserShort("pranav", 23);
console.log(user);
console.log("\n");










//-----------> ANother shorthand to initialise property to obj
let name = "pranav", age = 30;
user = { name, age }; // same as { name: name, age: age }
console.log(user);
console.log("\n");









//--------> Property name limitation : can have any property name even reserved keywords

/*
    In short, there are no limitations on property names. 
    They can be any strings or symbols

    Other types are automatically converted to strings.

    For instance, a number 0 becomes a string "0" when used as a property key:
*/

let obj = {
    for : 1,
    if : 2,
    return : 3,
    777 : 2       // same as "777" : 2
};
console.log(`${obj.for +  obj.if + obj.return + obj[777]}`);
console.log(obj);
console.log(obj[777]);   // both access the same property, number 777 converted to string "777"
console.log(obj["777"]);
console.log("\n");










//-------> Existance of property using "in" operator
user = {
    name : "Pranav",
    age : 25,
    roll : 42,
};

console.log(user.name);
console.log(user.noSuchPropertyExist);

console.log("name" in user);
console.log("noProperty" in user);
// console.log(age in user); //--> error

/*
    Please note that on the left side of in there must be a property name. 
    That’s usually a quoted string.

    If we omit quotes, that means a variable should contain the 
    actual name to be tested. For instance:
*/
var key = "age";
console.log(key in user);
console.log("\n");













//---------> Traverse all keys of an object : for..in loop
user = {
    name : "Pranav",
    age : 30,
    isAdmin : true,
};
for (let key in user) {
    console.log(`${key} : ${user[key]}`); // dot operator will not work
}
console.log("\n");











//-------> Ordered properties in object : only integer properties are odered 
let codes = {
    "91" : "India",
    "1" : "USA",
    "49" : "Germany",
}

console.log(codes);

for(let prop in codes){
    console.log(`${prop} : ${codes[prop]}`); // dot operator will not work
}
console.log("\n");











//-------> If we want to preserve the same order then make integer as string
codes = {
    "+91" : "India",
    "+1" : "USA",
    "+49" : "Germany",
}

console.log(codes);

for(let prop in codes){
    console.log(`${prop} : ${codes[prop]}`); // dot operator will not work
}
console.log("\n");












//----> Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(schedule) {
    for(let key in schedule){
        return false;
    }
    return true;
}

let schedule = {};
console.log(schedule);
console.log(isEmpty(schedule));

schedule["6:00"] = "get up";
console.log(schedule);
console.log(isEmpty(schedule));
console.log("\n");











//---------> Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum); // 390
console.log("\n");












//---------> Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == "number") {
            //menu[key] = 2 * menu[key];
            menu[key] *= 2;
        }
    }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);
console.log("\n");









//---------> Doubt

user = {
    name : "Pranav",
    age : 20,
};

key = "age";
console.log(user[key]);

user[key] *= 2;
console.log(user[key]);
