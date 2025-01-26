console.log("Operators");
console.log(" 5 + 5 = " , 5 + 5); 
console.log(5*5);
console.log(5/5);
console.log(5**5);
console.log(5%5);

//Assignment operators
function operators(){

   // var x = 5
   var x = parseInt(document.getElementById("data").value);
    x+=5;
    console.log(x);
    document.getElementById("s1").innerHTML = "gives " + x;

    x-=5
    console.log(x)
    document.getElementById("s2").innerHTML= "gives " + x;

    x*=5
    console.log(x);
    document.getElementById("s3").innerHTML= "gives " + x;

    x/=5
    console.log(x);
    document.getElementById("s4").innerHTML= "gives " + x;

    x%=5
    console.log(x);
    document.getElementById("s5").innerHTML= "gives " + x;

    x**=5
    console.log(x)
    document.getElementById("s6").innerHTML= "gives " + x;
}


function comparision(){  
    n1=parseInt(document.getElementById("num1").value);
    n2=parseInt(document.getElementById("num2").value);
    console.log(n1)
    console.log(n1)
    console.log(n1==n2)
    document.getElementById("li01").innerHTML= n1==n2;
    //Write the remaing code to display all the comparision output on the home1.html page
}