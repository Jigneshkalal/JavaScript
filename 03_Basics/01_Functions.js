/* function myname(){
    console.log("j");
    console.log("i");
    console.log("g");
    console.log("n");
    console.log("e");
    console.log("s");
    console.log("h");
    
}

myname() Normal Function */ 


/* function Myname2(number1,number2) this is called perameters{
    console.log(number1+number2);
}

Myname2(6,5) this is callled arguments*/ 

/*  function Myname3(number1,number2){
    let result=number1+number2
    return result
}
const result=Myname3(4,6)

console.log("Result:",result); */

function Myname4(Username="MR kalal"){
    if(Username===""){
        console.log("Please enter name");
        return
    }
    return `${Username} is Logged in`      
}
const Newsuer=Myname4()

/* console.log("here is",Newsuer); */


/* const user = {
    name:"Jignesh",
    price: 199
}

function Handleobject(Anyobject){
    console.log(`Hii my name is ${Anyobject.name} and my age is ${Anyobject.price}`); passing the object in function

}
Handleobject(user) */

/* const MynewArry=[100,200,300,400]

function Myarryfunction(getmyarry){      put arry in function 
        return getmyarry[2]
}

console.log(Myarryfunction(MynewArry)) */