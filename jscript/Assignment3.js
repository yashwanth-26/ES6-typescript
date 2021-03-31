"use strict";
console.log("A3q2-----------");
class Account {
    constructor(id1, name1, balance) {
        this.id1 = id1;
        this.name1 = name1;
        this.balance = balance;
    }
}
class Saving extends Account {
    constructor(id1, name, balance, interest) {
        super(id1, name, balance);
        this.id1 = id1;
        this.name = name;
        this.balance = balance;
    }
}
class Current extends Account {
    constructor(id, name, balance, credit) {
        super(id, name, balance);
    }
}
let s1 = new Saving(1, "mani", 25, 2);
let s2 = new Saving(2, "kant", 35, 3);
let c1 = new Current(3, "uma", 50, 6);
let c2 = new Current(4, "vijay", 42, 7);
let total = function () {
    return s1.balance + s2.balance + c1.balance + c2.balance + "  " + c2.name1;
};
console.log(total());
console.log("A3q3-----------");
let circle = {
    s: "circle"
};
let employee = {
    s: "mani"
};
let printable = function (a) {
    console.log(a);
};
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
let x;
let y;
let p1 = new Promise((resolve, reject) => {
    x = 50;
    resolve(50);
});
let p2 = new Promise((resolve, reject) => {
    y = 6;
    resolve(60);
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
Promise.all([p1, p2]).then(result => {
    console.log(result);
    // const tooo=result.reduce((a11, b11) =>{ a11+b11},0);
    // console.log(tooo);
});
//# sourceMappingURL=Assignment3.js.map