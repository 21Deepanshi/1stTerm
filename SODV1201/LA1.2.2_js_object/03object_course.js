
// Define a function which will work as a method
class courseCode {
   constructor(code) {
      this.ccode = code;
   }
}

class classRoom {
   constructor(room) {
      this.croom = room;
   }
}
   
class Course {
   constructor(cname, teacher) {
      this.teacher = teacher;
      this.cname = cname;
      this.codeInfo = courseCode; // Assign that method as property.
      this.roomInfo = classRoom;

   }
}
   
var mycourse = new Course("Web dev't", "TGB");// create instance of course object using new operator
mycourse.codeInfo('sodv1201');
mycourse.roomInfo('N718')

console.log("course name is : " + mycourse.cname   );
console.log("course teacher is : " + mycourse.teacher  );
console.log("course code is : " + mycourse.ccode  );
console.log("Classroom is : " + mycourse.croom  );