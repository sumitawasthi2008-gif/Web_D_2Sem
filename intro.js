console.log("hello");
document.write("Hello");
var num =10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
var person={
    name:'sumit awasthi',
    age:'18',
    title:'student'
}
const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false");
}

// let numbers=[1,2,3,4];
// let square=numbers.map(num=> num*num);
// console.log(square);

let numbers=[10,20,30];
let result=numbers.filter(num=>num>15);
console.log(result);

