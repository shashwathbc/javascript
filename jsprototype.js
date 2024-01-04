// In JavaScript, inheritance works a bit differently compared to C++ or Java. 
// JavaScript inheritance is more widely known as “prototypical inheritance”.

/*
one object trying to access methods and properties of other object is called prototype
 */

let arr = ['shash','test'];
// arr. when we type arr. we get access to  build in functions , methods properties 

let obj = {
    name : 'shash',
    age : 10,
    getIntro : function(){
        console.log('get access ', this.age , this.na-me)
    }
}
// obj. when we type obj. we get access to  build in functions , methods properties 
function fun(){

}
// fun. when we type fun. we get access to  build in functions , methods properties 
// these access we get from protype , js engine attaches our obj ,arr , fun with these methods or hidden properties which we get from prototype
// whatever u create in js an object is attached to it which has all those methods.

// EXAMPKE TO CHECK  PROTOTYPE
// Array.prototype  
// Object.prototype 
//prototype chain  :  prototype of array is an object and prototype of object is an object and this objects prototype is null and this is called prototype chain 

//EXAMPLE TO UNDERSTAND  PROTOTYPICAL INHERITANCE  :  
let obj1 = {
    name : 'shash',
    age : 10,
    getIntro : function(){
        console.log('get access ', this.age , this.na-me)
    }
}

let obj2 = {
    name : 'shash'
}

obj2.__proto__ = obj1;
// now if i do 
console.log(obj2.age);  // 10  since there is no age in obj2
console.log(obj2.name);  // shash since name is alredy present in obj2