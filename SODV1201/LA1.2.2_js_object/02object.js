//Different examples about JS object
//===================================================
let Student = {			// Create an object called Student.
	Name: 'Amelie',		// Here's the first name/value item.
	Grade: 12			// Here's another name/value item.
}

console.log(Student.Name);

//====================================================
//object can have property and method

let Employee = {
	FirstName: 'Amelie',
	LastName: 'Jones',
	profession:"IT helpdesk ",
	employed:true,
	salary:5000.00,
	FullName: function() { return (this.FirstName + ' ' + this.LastName) },
	Aboutme:function(){
		console.log("I am "+ this.FirstName +this.LastName +"I am "+ this.profession)
	}
}

console.log(Employee.FullName());		// "Amelie Jones"
console.log(Employee.Aboutme)

//====================================================

//Constructor function , OOP in JS

// function Manager(fn, ln) {
// 	this.FirstName = fn;
// 	this.LastName = ln;
// 	this.FullName = function() { 
// 		return (this.FirstName + ' ' + this.LastName + ' from  ' + this);
// 	}
// }
// // This function allocates memory for all the names in manager and then executes
// // the function as a constructor.
// let newManager = new Manager('Amelie', 'Jones');


////Record
// let ManagerOne = new Manager('Amelie', 'Jones');
// let ManagerTwo = new Manager('John', 'Doe');
// let ManagerThree = new Manager('Mike', 'Smith');

// console.log(ManagerOne.FullName());			// "Amelie Jones"
// console.log(ManagerTwo.FullName());			// "John Doe"

