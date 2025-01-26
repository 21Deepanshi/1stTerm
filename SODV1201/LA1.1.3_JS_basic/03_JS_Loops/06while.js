//Exmaple 3 , what will be the output for the following code?
console.log("Example3")
var a=[1,2,3,4,5,6];
var b=[];
function displayArray(dataset) 
{
     var len = dataset.length, i = 0;
     if (len == 0)
        console.log("Empty Array");
     else 
     {
         do 
         {
             console.log(dataset[i]);
         } while (++i < len);
     }
}


displayArray(a);
displayArray(b);


 