const object ={
    name:"jignesh",
    age:20,
    email:"Jignesh@gmail.com"
}
/* console.log(object.name);
console.log(object["email"]); */

object.age=22 
//console.log(object.age); if we neec to change the value in object so just access the key and overritw the value

/* object.test=function() {
    console.log("Hellow javascript");   Object with function 
} */


/* object.test2=function() {
    console.log(`Hii my name is ${this.name}`);   we access the key of object in function just using "this"  the "this" is define current object   
} */

/* console.log(object.test());
console.log(object.test2()); */

//**************************************************************Object merge and assign and other ******************************************

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"f"}

//const obj3= {obj1,obj2}
const obj3= Object.assign(obj1,obj2)
console.log(obj3);
