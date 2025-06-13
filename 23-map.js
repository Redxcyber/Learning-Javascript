//--------------> Map

/*
    Map is a collection of keyed data items, just like an Object. 
    But the main difference is that Map allows keys of any type.

    A Map is a built-in object in JavaScript that stores key-value pairs, 
    where any value (both objects and primitive types) can be used as a key.


    Methods and properties are:

    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the element (the key/value pair) by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.

*/

let map = new Map();
console.log(map);

map.set("1", "str1");    // a string key
map.set(1, "num1");      // a numeric key
map.set(true, "bool1");  // a boolean key
console.log(map);

// remember the regular Object? it would convert keys to string
// Map keeps the type as you passed, so these two are different:
// access key in map
console.log( map.get(1) );
console.log( map.get("1") ); // but in obj these both are treated same as string "1"

//no of element in map
console.log( map.size );









//--------------->  map[key] isn’t the right way to use a Map - but it also works

/*
    Although map[key] also works, e.g. we can set map[key] = 2, 
    this is treating map as a plain JavaScript object, 
    so it implies all corresponding limitations (only string/symbol keys and so on).

    So we should use map methods: set, get and so on.
*/

map["name"] = "Pranav";
console.log(map);
console.log("\n");








//----------> Map can also use object as keys

let john = { name : "john" };

// for every user, let's store their visits count
let visitCountMap = new Map();

// john is the key for the map
visitCountMap.set(john, 3);

console.log(visitCountMap);
console.log(visitCountMap.get(john));
console.log("\n");










//--------> We can't use object as a key in Object, permit only string as key

john = { name : "john" };
let ben = { name : "ben" };

// try to use an object instead of map
visitCountObj = {};

// try to use john object as key instead of map
visitCountObj[john] = 3;

// try to use ben object as key instead of map
visitCountObj[ben] = 13;

//print main object
console.log(visitCountObj);

console.log(visitCountObj["[object Object]"]); // 13

/*  
    ✅ Code Breakdown
        
        → We are creating two different objects: john and ben.
        → Even though they have different content, they are still objects (reference types).

        → We create an empty plain object visitCountObj to store visit counts.
        → The goal is to use john and ben as keys in this object.

        → Now, when we try to use an object (like john) as a key in a plain JavaScript object,
        → JavaScript internally converts that object key into a string using toString() method.

        → For any regular object, toString() returns: "[object Object]"
        → So internally, the key becomes the string "[object Object]"

        → That means: visitCountObj[john] = 3;
        → actually becomes: visitCountObj["[object Object]"] = 3;

        → Now, when we do visitCountObj[ben] = 13;
        → ben is also an object → also gets converted to "[object Object]"

        → So JavaScript sees this as: visitCountObj["[object Object]"] = 13;
        → This **overwrites** the previous value 3 with 13 because both keys are the same string.

        → When we print the object, we see only one property:
        → It looks like: { "[object Object]": 13 }

        → So even though we used two different objects as keys,
        → the plain object treated both as the same string key.
        → Therefore, in the end we get only one key value in main object.


    ❗ Conclusion: 
        - Plain objects can't use actual objects as keys.
        - They convert them to strings, which can cause key collisions.
        - To use real objects as keys, use the Map data structure instead.


    🧠 Summary for Beginners:
        - In normal JavaScript objects, object keys are converted to strings.
        - Both john and ben become the same string: "[object Object]".
        - So only the last value is saved.

    ✅ Use Map instead if you want to use objects as keys.

*/













//----------------> How Map compares keys

/*
    To test keys for equivalence, Map uses the algorithm SameValueZero. 
    It is roughly the same as strict equality ===, 
    but the difference is that NaN is considered equal to NaN. 
    So NaN can be used as the key as well.

    This algorithm can’t be changed or customized.
*/


//💡 So in Map, even this works:
map = new Map();
map.set(NaN, "Not a number");
console.log(map.get(NaN));
console.log("\n");











//--------------> Chaining : Every map.set call returns the map itself, so we can “chain” the calls:

map = new Map();

//map.set("1", "str1").set(1, "num1").set(true, "bool1");

map.set("1", "str1")
   .set(1, "num1")
   .set(true, "bool1");

console.log(map);
console.log("\n");










//-------------------> Iteration over Map

/*
    For looping over a map, there are 3 methods:

    map.keys() – returns an iterable for keys,
    map.values() – returns an iterable for values,
    map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

    An iterable or iterator is a special object in JavaScript that you can loop over using for...of.

        let myMap = new Map([
          ['name', 'John'],
          ['age', 25],
          ['country', 'India']
        ]);

        let keys = myMap.keys();

        console.log(keys); // [Map Iterator] { 'name', 'age', 'country' }

*/


let recipeMap = new Map([
    [ "cucumber", 500 ],
    [ "tomatoes", 530 ],
    [ "onions", 30 ]
]);
console.log(recipeMap);
console.log(recipeMap.keys());
console.log(recipeMap.values());
console.log(recipeMap.entries());

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount);
}

// iterate over [key, value] entries
for (let entry of recipeMap.entries()) {
    console.log(entry);
}

/*
    💡The insertion order is used
        The iteration goes in the same order as the values were inserted. 
        Map preserves this order, unlike a regular Object.
*/




// Besides that, Map has a built-in forEach method, similar to Array:

/*
    ✅ Syntax of Map.forEach(fn)

        map.forEach(function(value, key, map) {
            // your code here
        });

        map.forEach((value, key, map) => {
            // your code here
        });

    🔹 Parameters:
        value : the value associated with the key.
        key   : the key of the current element.
        map   : the Map object itself (optional to use).

*/

recipeMap.forEach( (values, key, map) => {
    console.log(`${key} : ${values}`);
});


/*
    🧠 Bonus Tip:
        If you want to loop over a Map another way, you can also use below code
        This is called destructuring in a for...of loop, and it works naturally with Map.
*/

for (let [key, value] of recipeMap) {
  console.log(`${key} → ${value}`);
}
console.log("\n");










//-----------------> Object.entries(obj) : map from obj (convert plain object to map)

/*
    If we have a plain object, and we’d like to create a Map from it, 
    then we can use built-in method Object.entries(obj) that returns an 
    array of key/value pairs for an object exactly in that format.
*/

let obj = {
  cucumber: 500,
  tomatoes: 350,
  onions: 50
};
console.log(obj);

console.log(Object.entries(obj)); // [ [ 'cucumber', 500 ], [ 'tomatoes', 350 ], [ 'onions', 50 ] ]

map = new Map(Object.entries(obj));

console.log(map); // Map(3) { 'cucumber' => 500, 'tomatoes' => 350, 'onions' => 50 }
console.log("\n");










//--------------> Object.fromEntries(iterable) : Object from Map (convert map to plain obj)

/*
    There’s Object.fromEntries() method that does the reverse: 
    given an array of [key, value] pairs, 
    it creates an object from them:
*/



// Example 1: Convert Map → Object

let pricesMap = new Map([
    ["banana", 20],
    ["orange", 30],
    ["guava", 10],
]);
console.log(pricesMap);

let pricesObj = Object.fromEntries(pricesMap);
console.log(pricesObj); // Output: { banana: 20, orange: 30, guava: 10 }


// Now recipeObj is a regular object you can use like:
console.log(pricesObj.orange); // 30





// Example 2: Convert array of pairs → Object

let pairs = [
    ["name" , "john"],
    ["age" , 30],
    ["admin" , false],
];
console.log(pairs);

let user = Object.fromEntries(pairs);
console.log(user); // Output : { name: 'john', age: 30, admin: false }


// Or we can do directly
pairs = Object.fromEntries([
    ["name" , "john"],
    ["age" , 30],
    ["admin" , false],
]);
console.log(pairs);
console.log("\n");











//-------------> map.entries() : Returns an iterator object of [key, value] pairs.



// 🔹 1. Basic Example

map = new Map([
    ["apple", 5],
    ["banana", 2],
    ["mango", 9],
]);
console.log(map);

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

for (let entry of map.entries()) {
    console.log(entry);
}




// 🔹 2. Destructuring Example

map = new Map([
    ["apple", 5],
    ["banana", 2],
    ["mango", 9],
]);
console.log(map);

for (let [key, value] of map.entries()) {
    console.log(`${key} → ${value}`);
}
/*
    apple → 5
    banana → 2
    mango → 9
*/




// 🔹 3. Convert Map to Array of Pairs

map = new Map([
    ["apple", 5],
    ["banana", 2],
    ["mango", 9],
]);
console.log(map);

arr = Array.from(map.entries());
console.log(arr); // [ [ 'apple', 5 ], [ 'banana', 2 ], [ 'mango', 9 ] ]




// 🔹 4. Convert Back to Map using entries

arr = [
  ["apple", 5],
  ["banana", 10],
  ["mango", 7]
];
console.log(arr);

let newMap = new Map(arr);
console.log(newMap); // Map(3) { 'apple' => 5, 'banana' => 10, 'mango' => 7 }




// 🔹 5. Use with Spread Operator

map = new Map([
    ["apple", 5],
    ["banana", 2],
    ["mango", 9],
]);
console.log(map);

console.log(...map); // [ 'apple', 5 ] [ 'banana', 2 ] [ 'mango', 9 ]

console.log([...map]); // [ [ 'apple', 5 ], [ 'banana', 2 ], [ 'mango', 9 ] ]

console.log([...map.entries()]); // [ [ 'apple', 5 ], [ 'banana', 2 ], [ 'mango', 9 ] ]

// ✅ Same output as Array.from() — just shorter syntax.





// 🔹 6. Use in Function

function printMap(map) {
    for (let [key, value] of map) {
        console.log(`${key} : ${value}`);
    }

}

map = new Map([
    ["apple", 25],
    ["banana", 12],
    ["mango", 90],
]);

printMap(map);




// 🔹 7. Real-world Example: Map of Users

let user1 = { name : "Pranav" };
let user2 = { name : "Atul" };

let roles = new Map([
    [user1, "admin"],
    [user2, "editor"],
]);

for (let [user, role] of roles.entries()) {
    console.log(`${user.name} is ${role}`);
}


// for...of only works on iterables (like arrays, maps, strings, etc.).
for (let [user, role] of [
    [ { name: 'Pranav' }, 'admin' ], 
    [ { name: 'Atul' }, 'editor' ]
] ) {
    console.log(`${user.name} is ${role}`);
}