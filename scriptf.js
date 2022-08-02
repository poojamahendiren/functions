//a.Print odd numbers in an array

//Anonymous function
let arr=[0,1,2,3,4,5,6];
let odd=function(){
    let odd=arr.filter(num=>num%2==1);
    return (odd);
}
console.log(odd());
//IIFE Function
let a=[0,1,2,3,4,5,6];
(function odd() {
    let odd=a.filter(num=>num%2==1);
    console.log(odd);
})
();
////////////////////////////////////////////////////////////////////

//b.Convert all the strings to title caps in a string array

//Anonymous function
let str=function (){
    let arr="hello world";
    let titlecase=arr.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());
    return(titlecase);
}
console.log(str());
//IIFE Function
(function(str1) {
    let str2=str1.toLowerCase().split(' ');
    for(var i=0;i<str2.length;i++){
    str2[i]=str2[i].charAt(0).toUpperCase()+str2[i].slice(1);
    }
    console.log(str2.join(' '));
})
("hello world");
////////////////////////////////////////////////////////////////////

//c.sum of all numbers in an array

//Anonymous function
let func=function (a,b,c,d,e){
    return(a+b+c+d+e);
}
console.log(func(1,2,3,4,5));
//IIFE function
(function add(a,b,c){
    console.log(a+b+c);
})
(1,2,3);
/////////////////////////////////////////////////////////////////////

//d.Return all prime numbers in an array

//Anonymous function
let prime=function(arr){
    return arr.filter(function(n){
        for(let i=2;i<n;i++){
            if(n%i===0)return false;
        }
        return n>1;
    });
};
console.log(prime([5,6,7,8,9]));
//IIFE Function
(function (){
    var primeNum = [7, 16, 9, 3]
    
    primeNum = primeNum.filter(function(number) {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(primeNum);
    })();
///////////////////////////////////////////////////////////////////////

//e.Return all palindrome in an array

//IIFE Function
(function (){
    var myArray=['fascino','honda','vespa','tvs'];
    var arr=myArray.filter(function(c,d){
        var palindrome=c.split('').reverse().join('');
            if(c==palindrome){
                console.log(myArray[d]);
            }
        });
    })
    ();
////////////////////////////////////////////////////////////////////////

//f.Return median of two sorted arrays of same size.

//Anonymous :
let median = function(a, b) {

  let c = [...a, ...b].sort((a, b) => a - b);

  const half = c.length / 2 | 0;
  
if (c.length % 2) {
  return c[half];
} else {
  
  return (c[half] + c[half - 1]) / 2;
}
}
let arr1 = [1, 12, 15, 26, 38,24];
let arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arr1, arr2));

//IIFE :
( function() {
    let arr1 = [1, 12, 15, 26, 38,24];
    let arr2 = [2, 13, 17, 30, 45, 47];
    
      let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    
      const half = c.length / 2 | 0;
      
    if (c.length % 2) {
    console.log(c[half]);
    } else {
      
    console.log((c[half] + c[half - 1]) / 2);
    }
    
    })()
////////////////////////////////////////////////////////////////////////////////////////

//g. Remove duplicates from an array

//Anonymous :

let findDuplicates = function () {
  
    const yourArray = [1, 1, 2, 3, 4, 5, 5]
    let duplicates = []
    const tempArray = [...yourArray].sort() 
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    console.log(duplicates) 
  }

/////////////////////////////////////////////////////////////////////////////////////////
//h.Remove duplicates from an array

//Anonymous :
let rotateArray =function(A, K) {
    if (A.length === K || K === 0) {
        return A;
    }
    K = K % A.length;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
  console.log(A);
  }
  rotateArray([1,2,3,4,5],2)
    
//arrow function:
  let data = [2,3,4,4,5,89,76];
  let pal = (x) => {
    let result = [];
    x.forEach((data) => {
      if (!result.includes(data)) {
        result.push(data);
      }
    });
    return result;
  };
  
  console.log(pal(data)); 
///////////////////////////////////////////////////////////////////////////

//b.Print odd numbers in an array

//Arrow function
let d=[0,1,2,3,4,5,6];
var fin=()=>{
    var fin=d.filter(num=>num%2==1);
    return fin;
}
console.log(fin());

//c.Convert all the strings to title caps in a string array

//Arrow function
let stri=()=>{
    let cap="hello world";
    let titlecaps=cap.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());
    return(titlecaps);
}
console.log(stri());

//d.sum of all numbers in an array

//Arrow function
let funct=(a,b,c,d,e)=>{
    return(a+b+c+d+e);
}
console.log(funct(1,2,3,4,5));

//e.Return all palindrome in an array

//Arrow funnction


function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}


var string=('m','a','d','a','m');
var checkPalindrome=(string)=>{
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
    return(string == reverseString);

}
console.log(checkPalindrome(string));
