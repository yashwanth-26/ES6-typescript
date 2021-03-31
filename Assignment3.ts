
console.log("A3q2-----------");

class Account {
    constructor (public id1: number,public name1: string,public balance: number){}
}
class Saving extends Account{
    constructor(public id1: number,public name: string,public balance: number,interest: number){
        super(id1,name,balance);
    }

}

class Current extends Account{
    constructor(id: number, name: string, balance: number,credit: number){
        super(id,name,balance);
    }
}

let s1= new Saving(1,"mani",25,2);
let s2= new Saving(2,"kant",35,3);

let c1= new Current(3,"uma",50,6);
let c2= new Current(4,"vijay",42,7);

let total = function(){
  return s1.balance+s2.balance+c1.balance+c2.balance+"  "+c2.name1;
}

console.log(total());

console.log("A3q3-----------");

interface Printable {
    s:string
}

let circle: Printable ={
    s:"circle"
}
let employee: Printable ={
    s:"mani"
}

let printable= function(a: Object) {
    console.log(a);
}
printable(circle);
printable(employee);


console.log("A3q1-----------");
/*
let p= function (a: number,b: number): Promise<{a: number,b: number}>{
    return new Promise((resolve)=>{
        console.log(a+b);

    });
}

var aaa: number=5;
var bbb: number=6;
p(aaa,bbb)
.then((res)=>{
    console.log("binhk")
});
*/
let x: number;
let y: number;
let p1= new Promise((resolve, reject)=>{
    x=50;
    resolve(50);
});
let p2= new Promise((resolve, reject)=>{
    y=6;
    resolve (60);
});

/*
p3.then(
    function(value){
        console.log(value);
    },
    function(error){
        console.log(error);
    }
);*/

Promise.all([p1,p2]).then(result =>{
    console.log(result);
   // const tooo=result.reduce((a11, b11) =>{ a11+b11},0);
   // console.log(tooo);
});
