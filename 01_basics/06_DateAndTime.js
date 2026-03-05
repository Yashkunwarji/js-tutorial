//Dates
let mydate=new Date();
//  console.log(mydate);
//  console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toString());
//  let newdate=new Date(2023, 0 ,23);
//  newdate=new Date("2023-01-14");
//  newdate=new Date("01-05-2023");
//  console.log(newdate.toDateString());
//  let timestamp=Date.now();
//  console.log(timestamp);
// console.log(mydate.getDay());
// console.log(mydate.getMonth()+1);
mydate.toLocaleString('default',{
    weekday: "long",
    timeZone:'Asia/Kolkata'
});
console.log(mydate);