
    //Working with Array Example1
    var a1 = [1,3,-5,7,-10,-3,11]
    
    //forEach - loop through each element and do something you want on each elements
    a1.forEach((e,index, a1)=>{console.log(e)});

    a1.forEach(function(e){
        console.log(e)
    });

    
    //map - loop through the array and update each element and create new array or do something new 
    
    const square = a1.map(function(e){
        return e*e
    })
    console.log(square)
    //filter - loop through the array and return elements based on given condition
    const vl = a1.filter(function(el){
        console.log(el>0);
    })
    
    //reduce - it takes two mandatory param accumulator and item and it add up elements or stack them
    const sum = a1.reduce(function(acc, item){
        return acc + item
    })
    console.log(sum)
    
    //some - it loop through elements and return boolean based on given condition 
    const sm = a1.some(function(e){
        e>=0;
    })
    console.log(sm)
    
    //every - similar to some but condition should be true for all elements to get true
    const ev = a1.every(e=>e>0);
    console.log(ev);
    
    //Working with Array Example2

    //=============working with multiple objects in array===========================
    var library = [ 
        { author: 'Zill Gori', title: 'The test', libraryID: 1254, year:2008},
        { zuthor: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264, year:2000},
        { author: 'Auzanne Collins', title: 'Mocking: The Hunger Games', libraryID: 3245, year:2022},
        { author: 'Auzanne Collins', title: 'js', libraryID: 3245, year:2008}
        ];

        console.log(library[0])//{ author: 'Zill Gori', title: 'The test', libraryID: 1254, year:2008}
        console.log(library[0].title) //The test

        console.log(library[2])//{ author: 'Auzanne Collins', title: 'Mocking: The Hunger Games', libraryID: 3245, year:2022},
        console.log(library[2].year)//2022

        
        //Write a code to display the title of each book from the library array object
        const books = library.forEach(function(element){
            console.log(element.title);
        })
        //or
        for(i=0;i<library.length;i++){
            console.log(library[i].title)
        }
        console.log(library.length)

        //Write a code to display the book with title js
        const book2 = library.filter(el=>el.title==="js");
        //or
        const book3 = library.filter(function(element){
            if(element.title === "js"){
                return true;
            }
        })

       
    //Additional Practice questions

    //Display all book details  on console 
    //Write a code to display all information of a book from library object where year is 2008
    //write a code to sort the books by title
    //use data.txt file to practice all the above array methods.
        
    const salary=[5500,4000,5000,6000,10000,3000,5300,7020,4900]
    
    //Write a code to loop through array object salary use for loop and foreach

    //Write a code to filter salaries above 4000 use for loop and filter (use arrow function and function expression)
    //find - search for specific elements and stops as it finds the first matching 
    
    //please test  findIndex() method which is similar to find. What is the difference?

 
    