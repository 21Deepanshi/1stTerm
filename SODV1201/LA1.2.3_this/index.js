// //Introduction to this keyword  examples
// //EX1===========================================


this.course_name = "Web-programming";// Attached to the window
var course_name = "Web"; //Global variable 

console.log(this.course_name);
console.log(course_name);



// //Ex2============================================


 // var name = "web course";

// var obj = {name : 'Sandra'};
// console.log(obj.name);

// function std(){
//     console.log(this + "  from  inside function std")
//     return this.name;
    
// }
// console.log(std()); //global function with undefined value

// //Ex3=======================================================

// var info = {
//   x: "Apple",
//   y: "fruit",
//   z: function() {
//     return this.x + " is " + this.y ;
//   },
// };
// console.log(info.x);
// console.log(info.z());

// //Ex4=========================================================

// let user = {
//     name: "John",
//     sayHi() {
//       console.log("Hello " +   this.name  + this ); //this = user object
//     }
//   };

// user.sayHi(); // Hello, John

// // //EX4-A=====================================================

// function hey(user){
//   console.log('Hello ' + user.name + ' ' + this);
// }

// hey(user); // Hello, John

// //Ex5=========================================================


// var webCourse = {
//   code: "SODV1201",
//   name: "Web Programming",

//   getFullName: function () {
//       console.log(webCourse.code + " - " + webCourse.name + " printed from " + this);
//   }
// }

// function printCourse(webCourse) {
//   console.log(webCourse.code + " - " + webCourse.name + " printed from " + this);
// }

// webCourse.getFullName();

// printCourse(webCourse);

// //EX6=====================================================

// function Book(bname, bauthor) {
// 	this.name = bname;
// 	this.author = bauthor;
// 	this.displayBName = function() {
// 		console.log('Book Name: ' + this.name + ' by ' + this.author);
// 	}
// }
// // Object(), Array() = new to create instance obj

// var book1 = new Book ('Js','Smith');
// var book2 = new Book("xx","xx");
// book1.name
// book1.displayBName();


