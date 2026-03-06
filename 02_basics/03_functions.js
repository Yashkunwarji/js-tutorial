// function add (number1,number2){
//     return number1+number2;
// }
// function hello(user){
//     return `hello ${user}`;
// }
// // console.log(hello("yash"))
// function makearr(...a){
//     return a;
// }
// // console.log(makearr(10,20,30));
// // console.log(makearr(10,24,2,4,3,2,2,4))
// user = {
//     name:"yosh",
//     class:3
// }
// function student(anyobject){
//     return `hello i am ${anyobject.name} from class ${anyobject.class}`
// }
// console.log(student(user));

//console.log(add1(5));  //works
function add1(num){
    return num+1;
}
// console.log(add1(5)); //works

//console.log(add2(5)); //Does not work
const add2 = function(num){
    return num+2;
}
//console.log(add2(5));//works