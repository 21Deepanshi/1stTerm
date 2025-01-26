// while output vs do...while
//====================================================
//example 1 while loop
console.log("Example1")
var n=10;  
while(n>=1)  //if true execute, infinite loop if you put n++
{  
 console.log(n) 
 n--
}  
//======================================================
console.log("Example1 with for loop")
for(n=10; n>=1; n--){
  console.log(n);
}
//=======================================================

//Exmaple 2
console.log("Example2")
var n=10;  
do{
  console.log(n)   
  n++;
}
while(n<=11) //if true execute, infinite loop if you remove n++, why?
  


 