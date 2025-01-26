//Syntax to create array in JS

// let arr= new Array();
// let arr =[];
// let arr =[1,2,3];
// let arr=[1,'apple','banana',3];

//Multidimensional/two dim array

let arr=['a',[7,9,6],[10,20,30,40],['Amlie','Roman','Tom'],'Student', 8,{v:"v"}]
arr[0]//a
arr[1]//[7,9,6]
arr[2]//[10,20,30,40]
arr[1][1]//9
arr[2][3]//40
arr[3][0]//Amlie
arr[2].length
arr[0].length

let arr1=[  [7,9,6],
            [10,20,30,40],
            ['Amlie','Roman','Tom']
        ]


let len = arr.length;
//var first = arr[0][0];
let first = arr[3][1];
// console.log("Array length = " + len);

// console.log(first);
//1.  Write a code to display element 40 and 8
console.log(arr[2][3])
console.log(arr[5])
//2.  Write a code to display element Tom

//3.  Write a code to display the length of 3rd element

//4.  Loop through two dimensional array
console.log("====== for loop=========");
for(var i = 0; i < arr.length ; i++) {
    var e = arr[i];
    for(var j = 0; j < e.length; j++) {
        console.log("arr["+i+"]["+j+"] = " + arr[j]);
    }
}
console.log("====== forEach=========");
arr1.forEach(function(item){
    item.forEach(function(value){
        console.log(value);
    });
});

arr1.forEach((a) => {
    a.forEach((data) => {
        console.log(data);
    });
});










































































// console.log(arr[2][3], arr[5])
// console.log(arr[3][2])
// console.log("Length of 3rd element in arr is " + (arr[3]).length)





































































