//pop() method removes the element and returns that element.
let array1 = [1,2,3]
let arrayss = array1.pop()
console.log(arrayss)
//Push() method insert the element and returns the lenght of the array.
let arrayss1 = [2,3,4]
arrayss1.push(2)
console.log(arrayss1)
//Shift () method removes the first element and returns that element.
let arrayys = [4,5,6]
arrayys.shift()
console.log(arrayys)
//Unshift() method adds the first element and returns the lenght of the array.
let arays = [5,6,8]
arays.unshift(9)
console.log(arays)

//add/remove items
//arr.push(..items)add items at the end and returns the length of the array
//arr.unshift(...items)add items at the beginning and also returns the lenght of the array
//arr.pop() removes the last item and returns that element
//arr.shift() method removes the first element and returns that element


//The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.

let array = [10,20,30,40,50]

array.splice(1,1)
 //removed the first indexed element in an array i.e 20 
console.log(array)

//with one argument or parameter

array.splice(1)
//removes all the elements from the indexed value 1 i.e 30,40,50
console.log(array)


array.splice(2,0,20,30)

//first arguments specifies the index where the elements can be inserted or deleted
//second argument specifies the no of elements to be deleted
//third argument specifies the element value to be inserted
console.log(array)

//slice method is used to create copy of an array

let arr = [10,20,30,40];

console.log(arr.slice(1,2));
//slice method is used to keep the original value as the same not affecting the updated one
let araa = arr.slice()
araa.push(4)
console.log(arr)
console.log(araa)
//We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.


//In string we use + for concation
//In arrays we use a method CONCAT()
//we can insert or push an element into an array without affecting the main array

let arr2 =[1,2,3]
let arr3 = arr2.concat(4)
console.log(arr3)
let arrayLike = {0: 'sharat'}
//console.log(arrayLike)
console.log(arr2.concat(arrayLike))
console.log(arr2)




let arr5 = [1, 2];

let arrayLike1 = {
  0: "something",
  1: "sachin",
  2: "pooja",
  "name":"sravan",
  3: "sharath",
   [Symbol.isConcatSpreadable]: true,
  length: 4
};

console.log( arr5.concat(arrayLike1) );


//The arr.forEach method allows to run a function for every element of the array.
arr2.forEach(function(n, index,array){
	console.log(n,index,array
)
});

//arr.forEach(function(item, index, array) {
  // ... do something with item
let arr4 = [4,5,6]
let arr6 = []
arr4.forEach(function(n){
	
arr6.push(n+1)	
});
console.log(arr6)

let arr7 = [5,6,7,8,6]
console.log(arr7.lastIndexOf(6))
console.log(arr7)

//Javascript is not fully functional language because strings are immutable and arrays and objects are mutable(mutable with the concept of pass by reference)
//queus are used for push and shift(FIFO) 
//stack are used for pop and push(LIFO)
//conversion of string to array
//split() this method is used to convert string into array

let arr8 = ['grapes']
let fruitNames = arr8
fruitNames.push('apple')
console.log(arr8)
//pass by reference
let str = "sravan"
let name = str.split("")
console.log(name)

let date = "20/11/2020"
let nam = date.split("/")
console.log(nam)


//convert array into string
//join method is used to convert array into string

let add = ['5','6','7']
let sub = add.join("+")
console.log(sub)

//For iteration in array we use forEach method.
let firstnames = ["sravan","kumar","Gugallu"]
//print each element of an array 
firstnames.forEach(function(name,index,array){
	console.log(name,index,array)

})
//Items i.e.,name we can have access to item
//Index to know at which position it is present
//array to know which arrays of elements
//For..of is used to iterate for strings

let firstnames1 = "sravan kumar"
for(let name1 of firstnames1){
	console.log(name1)
}

let searchitems = ['srv','shar']
console.log(searchitems.indexOf('srv'))
//indexof includes the position of the index
console.log(searchitems.includes(""))
//includes returns the boolean function either true or false

//find is used to search an element in arrayofobjects
//array.find(fn) comes handy

/*let users = [
    {id:1,name:'sravan'}
	{id:2,name:'rohit'}
	{id:3,name:'sharath'}
];
let user = user.find(item
*/

//undefined is return if the item is not there in find


//filter returns the arrayofobjects
//filter return the empty array

let arr10 = [1,2,3]
console.log(arr10.includes(2))


//sort method
let arrayToBeSorted = [1,2,5,6,15]
console.log(arrayToBeSorted.sort())

/*working of sort method
in the sort method all the elements are converted into string
console.log("2">"15")
it will return true
it will compare only first elements of the string
*/
//arr.sort((a,b)=>a-b);