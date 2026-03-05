//singleton
//object.create

//object literals
const mysym=Symbol("key 1");
const user ={
    name:"yosh",
    "full name":"yosh khmer jee",
    [mysym]:"key 1",
    age:13,
    location:"lask",
    email:"kk@gmail.com",
    isloggedin:false,
    lastloggedin:["sunday","chewsday"]
}


// console.log(user.name);
// console.log(user["name"]);
// console.log(user['full name']);
// console.log(user[mysym]);
// user.email="nig.js";
// console.log(user);
// user.greeting = function(){
//     console.log(`hello ${this.name}`);
// }
// console.log(user.greeting());
// const obj1={
//     1:"a",
//     2:"b"
// }
// const obj2={
//     3:"c",
//     4:"d"
// }
// const obj3={obj1 , obj2};
// console.log(obj3);
// console.log(obj3.obj1[2]);
// const obj4=Object.assign({},obj1,obj2);
// const obj5={...obj1,...obj2};
// console.log(obj4);
// console.log(obj5);



// const u=[
//     {
//         name:"usher",
//         num:1
//     },
//     {
//         name:"gato",
//         num:2
//     },
//     {
//         name:'prince',
//         num:3
//     }
// ]
// console.log(u);
// console.log(u[1]);
// console.log(Object.keys(u));
// console.log(Object.keys(u[0]));
// console.log(Object.values(u[0]));
// console.log(Object.entries(u[0]));



const course= {
    coursename:"el_gato",
    price:999,
    instructor:"yosh"
}
const {instructor} =course;
console.log(instructor);
const { instructor: inst } = course;
console.log(inst);

