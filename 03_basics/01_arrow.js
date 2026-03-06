// const user ={
//     name:"yosh",
//     class:"3rd",

//     hello: function(){
//         console.log(`hello i am ${this.name} and i am in class ${this.class}`);
//     }
// }
// user.hello();
// user.name='ysh';
// user.hello();
// function damn(){
//     let a=1;
//     console.log(this.a);
// }

//arrow functions
const gamn = () => {
    let b=1;
    console.log(this.b);  //no change
}

// const addtwo = (a,b) => {
// return a+b;
// }
// const addtwo =(a,b) => a+b

//object as output
// const addtwo = (a,b) => ({name:"yosh", class:"3rd"});
// console.log(addtwo(1,2));


//Immediately invoked Function Expressions (IIFE)

(function con(){
    //named IIFE
    console.log('DB connected')
})();

((name) => {
    //Un named IIFE
    console.log(`hello ${name}`);
})('yosh');