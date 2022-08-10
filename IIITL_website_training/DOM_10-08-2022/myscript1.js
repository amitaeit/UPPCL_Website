console.log("Hello world");

// for loop
let arr=[1,2,3,4,5];

//for each
arr.forEach((element,index) => {
    console.log(element,index);
});

for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        console.log(element);
        
    }
}

arr.map((element, index) =>{console.log(element,index);});  //Map it will return. Mostly used to inject in html.


// variable var,let and const.
var inta=5;
var intb=2;
const c=3;
if(intb>inta)
{console.log("true");}
else{console.log("false");}

// array 
const arr2=[];
arr2.push(5);  //push
console.log(arr2.pop()); //pop

//function declaration

function add1(a,b) {         //old syntax
    console.log(a+b);
    
}

const add =(a,b)=>{console.log(a+b);}   //new syntax
add(5,2);                 //function calling;
add1(7,8);                 //function calling;

