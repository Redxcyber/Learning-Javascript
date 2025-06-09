//----------> There are two syntaxes for creating an empty array:

let arr = [];
let arr2 = new Array();
console.log(arr);
console.log(arr2);








//-----------> Initialisation

let fruits = ["Apple", "Orange", "Banana", "Guava"];
console.log(fruits);




//-----------> Access element

fruits = ["Apple", "Orange", "Banana", "Guava"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]); //index out of bound -> undefined






//-----------> Replace or Add element

fruits = ["Apple", "Orange", "Banana", "Guava"];

fruits[1] = "Grapes";
console.log(fruits);

fruits[4] = "Blackberry";
console.log(fruits);





//-----------> No of elements in array : array's length

fruits = ["Apple", "Orange", "Banana", "Guava"];

console.log(fruits.length);






//---------> Array can store elements of any type

arr = [ "Apple", 2, { name : "Pranav", age : 23 }, true, function(){ console.log("Hello world");} ];

console.log(arr);
console.log(arr[2]);
arr[4]();








//------------> Get last elements with “at” : arr.at(i)

fruits = ["Apple", "Orange", "Banana", "Guava"];

console.log( fruits[fruits.length - 1] );

console.log( fruits.at(-1) );

console.log( fruits[-1] ); // return undefined , not valid in js









//-------------> Methods pop/push, shift/unshift

fruits = ["Apple", "Orange", "Banana", "Guava"];
console.log( fruits );

console.log( fruits.pop() );
console.log( fruits );

fruits.push("Pear"); // can add multiple elements too
console.log( fruits );

console.log( fruits.shift() );
console.log( fruits );

fruits.unshift("Mango"); // can add multiple elements too
console.log( fruits );








//-----------> Array is an object, thus it is copied by reference

let bikes = [ "Yamaha", "Hero" ];
let scooter = bikes;

console.log( bikes == scooter );

scooter.push("TVS");
console.log(bikes);









//-----------> Loops

fruits = ["Apple", "Orange", "Banana", "Guava"];

for (let i = 0; i < fruits.length; i++) {
    console.log( fruits[i] );
}



fruits = ["Apple", "Orange", "Banana", "Guava"];

for (let item of fruits) {
    console.log(item); // item = Apple, Orange, Banana .....
}



fruits = ["Apple", "Orange", "Banana", "Guava"];

// Generally, we shouldn’t use for..in for arrays.
for (let item in fruits ) {
    console.log( fruits[item] ); //item = 0, 1, 2, 3, 4 ....
}










//----------> A word about “length”

/*
    The length property automatically updates when we modify the array. 
    To be precise, it is actually not the count of values in the array, 
    but the greatest numeric index plus one.

    For instance, a single element with a large index gives a big length:
*/

fruits = [];
fruits[123] = "Apple";

console.log( fruits.length ); // 124

/*
    Note that we usually don’t use arrays like that.

    Another interesting thing about the length property is that it’s writable.

    We can manually change the length of an array.
        - Setting a smaller length truncates the array.
        - Setting a larger length creates empty slots (not undefined).
        - Setting length zero clears the array

    The process is irreversible, here’s the example:
*/

arr = [1, 2, 3, 4, 5];

console.log(arr);

arr.length = 10;
console.log(arr);

arr.length = 3;
console.log(arr);

arr.length = 0;
console.log(arr);








//------------> new Array()

let cars = new Array( "Suzuki", "Ford", "BMW", "Oddy" );

console.log(cars);
console.log(cars[2]);


/*
    If 'new Array' is called with a single argument which is a number, 
    then it creates an array without items, but with the given length.

    To avoid such surprises, we usually use square brackets, 
    unless we really know what we’re doing.
*/

let arrr = new Array(3);

console.log(arrr);
console.log(arrr.length);









//---------------> Multidimensional arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
console.log( matrix[0][2] );







//------------> toString() method

arr = [1, 2, 3];

console.log(arr);

console.log( String(arr) === "1,2,3" ); // true

console.log( [] + 1 ); // "1"
console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); // "1,21"








//-----------> Don’t compare arrays with ==

console.log( [] == [] ); //false
console.log( [0] == [0] ); //false

console.log( 0 == [] ); //true
console.log( '0' == [] ); //false

/*
    So, how to compare arrays?

    That’s simple: don’t use the == operator. 
    Instead, compare them item-by-item in a loop or using iteration methods explained in the next chapter.
*/

