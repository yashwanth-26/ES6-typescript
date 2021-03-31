"use strict";
console.log("A2Q1--------------");
class Fibonacci {
    constructor() { this.n = 0; }
    next1(n) {
        if (n <= 1) {
            return n;
        }
        return this.next1(n - 1) + this.next1(n - 2);
    }
    next() {
        const pre = Symbol("previousNo");
        const cur = Symbol("currentNo");
        const obj = {
            [pre]: this.next1(this.n),
            [cur]: this.next1(++this.n)
        };
        return {
            value: obj,
            done: false
        };
    }
}
let m = new Fibonacci();
console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log(m.next());
console.log("A2Q2--------------");
function getNextArmstrong() {
    let c = 0;
    return {
        next: function () {
            c++;
            function am() {
                let cc = 0;
                for (let i = c; i > 0; i++) {
                    let n;
                    n = i;
                    let a;
                    while (n > 0) {
                        a = n % 10;
                        cc += Math.pow(a, (`${i}`.length));
                        n = Math.floor(n / 10);
                        //  console.log(a+"  "+cc+"  "+i+"  "+`${i}`.length);  
                    }
                    if (i == cc) {
                        c = i;
                        break;
                    }
                    else {
                        cc = 0;
                        c++;
                    }
                }
                return c;
            }
            return { valu: am(), done: false };
        }
    };
}
let g = getNextArmstrong();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log("A2Q3--------------");
function* getNextArmstrong1() {
    let c = 0;
    let cc = 0;
    try {
        for (let i = c; i > -1; i++) {
            if (i > 1000) {
                throw "v";
            }
            let n;
            n = i;
            let a;
            while (n > 0) {
                a = n % 10;
                cc += Math.pow(a, (`${i}`.length));
                n = Math.floor(n / 10);
                //  console.log(a+"  "+cc+"  "+i+"  "+`${i}`.length);  
            }
            if (i == cc) {
                c = i;
                yield c;
                c++;
            }
            else {
                cc = 0;
                c++;
            }
        }
    }
    catch (err) {
        console.log("it  is above 1000");
    }
}
for (const v of getNextArmstrong1()) {
    console.log(v);
}
/*
const v= getNextArmstrong1();
console.log(v.next().value);  */
console.log("A2Q4--------------");
//# sourceMappingURL=Assignment2.js.map