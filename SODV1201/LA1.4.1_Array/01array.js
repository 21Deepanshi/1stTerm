

//0 , 5  0-4 , 0,1,2,3,4 n-1

//  let arr = new Array();		// Create a new array.  Don't use this method.// properties and methods


// let arr = [];				// Create a new array.  This way is better.

// let arr = [1, 2, 3]; //arr[0]=1	, arr[1]=2, arr[2]=3	// Create a new array with elements.

//  let arr = [1, 'cat', false];	// You can mix element types in an array.

// let len = arr.length;		// You can measure the length of an array.  Note
                                // that length is a property, not a method.
                        
// //Basics of Array
// let arr = ['cat', 'dog', 'lizard'];	// An array with three elements.
// console.log(arr[0]) //cat
// arr.pop();
// console.log(arr);
// arr.unshift('ox')
// arr.shift()

// arr[8] = 'fish';					// Add a fourth element at index [4].
// arr.push(51); //add new element at the end of the array

// console.log("Array length =  " + arr.length);				// 5
// console.log(arr[3]);					// undefined!

// [0] cat
// [1] dog
// [2] lizard
// [3] undefined , 4,5,6,7,
// [8] fish
// [9] 51


// // // //------------------------Add, Remove, sort elements from Array
// arr.push(51);				// Append an element to an array.
// console.log("Array len is = " + arr.length)
// console.log(arr)

// arr.pop();				// Remove the last element from an array.
// console.log("Array len is = " + arr.length)
// console.log(arr)

// arr.unshift(-11);			// Insert an element to the beginning of an array.
// console.log("Array len is = " + arr.length)
// console.log(arr)


//   arr.shift();				// Remove the first element from an array.
//   console.log("Array len is = " + arr.length)
//   console.log(arr)

//   arr.sort();                 // sort the array elements
//   console.log(arr)

//--------------------------------------Splice and Slice method in Array

// The splice method is a swiss-army-knife function for deleting and adding 
// elements to an array.  It mutates the source array and returns a new array
// with any elements deleted from the source array (may be empty).
// delete elements of count starting from the position defined
/// let deleted = arr.splice(position, count, elements ); // if you create new object elements will be deleted

//ex1
// var trees = ['spruce','apple', 'pine','aspen', 'cedar', 'maple', 'oak', 'birch', 'aspen'];
//var mytrees = trees.splice(6,2)
//start from element 1, exteract 3 elements, insert 2 new elements, assign the extracted array to the variable
//var newtreeArray = trees.splice(1,3, 'MangoTree' , 'AvocadoTree')	//position,count,element, 
// console.log( trees); //['spruce','MangoTree' , 'AvocadoTree', 'cedar', 'maple', 'oak', 'birch', 'aspen']
// console.log(newtreeArray)

// console.log(newtreeArray) //['apple', 'pine','aspen']

//  console.log(trees.splice(4,6));//start from element 4, extract away 6 elements, insert 0 element
//  console.log(trees.splice(2,0,'Tree1','Tree2','Tree3','Tree4'));//extract 0 element, but insert new element
//  console.log(trees);

//ex2
// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
 
//  months.splice(4, 1, 'May');
// replaces 1 element at index 4
// console.log(months);
  
// The slice method is for extracting a subset of an array.  It does not 
// mutate the source array and returns a new array with the sliced elements. --- ex for slice 

//   let newarr = months.slice(0, 3);
//  console.log( newarr) //['Jan', 'Feb', 'March', 
//  console.log(months) // ['Jan', 'Feb', 'March','April','May'];
// var narr = newarr.slice(1,1) //['Feb']

//------------------------------------------------------------------Concat Arrays
// The concat method is a powerful way to federate (join) multiple arrays 
// into a single result array.  It does not mutate the source arrays... many
// people assume it does because you choose one of the source arrays to act 
// on with the concat() method.  But it doesn't!

// let conifers = ['spruce', 'pine', 'cedar'];
// let deciduous = ['maple', 'oak', 'birch', 'aspen'];
// let theTrees = conifers.concat(deciduous);

//  console.log(theTrees.length);		// 7


// //------------------------------------------------------------SORT
// The sort method mutates the source array (this is called an "in place" sort).
// By default it works alphanumerically.

// let trees = ['spruce','apple', 'pine','aspen', 'cedar', 'maple', 'oak', 'birch', 'aspen'];
// console.log(trees.sort());


// But you can add a custom sort callback function easily.  The callback 
// simply compares something about two elements and returns <0, 0, >0 to
// indicate relative magnitude.

//  var sortedTrees = trees.sort((a, b) => a.length - b.length);   // Sort by name length.
//  console.log(sortedTrees)

// // //or

// var sortedtrees = trees.sort(function (a, b) {
//   if (a.length < b.length) 
//      return -1;
//   if (a.length > b.length)
//   return 1;
//   // a must be equal to b
//   return 0;
// });
// console.log("sorted tree is = " + sortedtrees)


// //Use the array forEach() method to safely iterate through an array.  

//let trees = ['spruce', 'pine', 'cedar', 'maple', 'oak', 'birch', 'aspen'];

// for(i = 0;i<=trees.length-1;i++){

// }
//-------------------------------------------------

// trees.forEach(element => console.log(element));

//or-------------------------------------------------

// trees.forEach(function(e,ind, trees) {
//   console.log(ind + ' ' +  e);
// });
//-----------------------------------------------------------------------
// Use the array map() method to iterate through an array, skip undefined 
// elements, and return a new array based on some transform function.

// function LookUpTreeDetails(val){
// console.log(val);
// }

// var dis = trees.map(element => {
// 	let Details = LookUpTreeDetails(element);
// 	return(Details);
// });
//console.log (dis);

//-----------------------------------------------------------------------

// Don't use for ... in with arrays.

// var arr = [1, 2, 3];

// for (var key in arr) {			// Don't do this -- order not guaranteed.
//     console.log(key);			// It also will include prototype properties!
// }

// // Use forEach() instead!


// // // //-------------------------find,filter,reduce,every and some  etc....

// arr.find(test)			// Find the first element matching a test function.

// arr.filter(filter)		// Make a new array that selects out certain elements.

// arr.reduce(aggregate)	// Return an aggregate value out of all elements.

// arr.every(test)		// Return true if all elements pass test.

// arr.some(test)			// Return true if any element(s) pass test.


// ---------------------------------------------------------------------

// let arr = [

// 	{ Name:'Amelie', Grade:8 },		// An object in the array.
// 	{ Name:'Christopher', Grade:7 }	// An object in the array.

// ]

// console.log(arr[1].Name);			// Christopher

//---------------------------------------------------------------------

// let arr = [ 'cat', 'dog' ];
// console.log(typeof arr);				// Returns 'object' NOT 'array'
// console.log(Array.isArray(arr));		// Returns true

// Watch out for this common bug!

// arr = [];
// if (arr) {						// Returns true if array is empty.
// 	console.log(arr[0]);			// ReferenceError!
// }


 
