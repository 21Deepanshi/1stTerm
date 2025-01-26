const person = {
    fname:"Kali",
    lname:"Noa",
    age: 21,
    fullname: this.fname + " " + this.lname
       
  };
  console.log(person.fname)
  console.log(person.fullname())


  function testme(){
    console.log("hello")
  }

  testme()
  

 // console.log("Name : "+ person.fname)

  // let txt
  // for (let x in person) {  //the is the property
  //   txt += person[x];
  // }

  // const student = {
  //   name:"Selina",
  //   address:{
  //     email:"selina@mybvc.ca",
  //     Pbox:"T3R0G9",
  //     phonNo:[403-123443, 587-908764, 403]
  //   }
  // }

  // console.log(student.address.Pbox )