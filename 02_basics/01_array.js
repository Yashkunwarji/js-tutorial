let a=[1,2345,43,6,7,4];
const b=[1,2,3,4,5];
console.log(b);
console.log(typeof b);
console.log(b[2]);
let c=a;
c[0]=3;
console.log(a[0]); //Shallow copy
console.log(a.slice(1,3));
console.log("slice",a);
console.log(a.splice(1,3));
console.log("splice",a);
b.push(2);
console.log(b); //wtf
b.unshift(9);
console.log(b);
b.push(a);
console.log(b); //pura array agya array me
newb=b.flat(Infinity);
console.log(newb); //alag hogya
console.log(Array.isArray(b));
console.log(Array.from('yash'));
console.log(Array.from({name:"yash"})); //intresting
let s1=100;
let s2=105;
let s3=200;
console.log(Array.of(s1,s2,s3));


