"use strict";
console.log("Q1------------");
const a = "manikant";
try {
    // a="kemisety";
}
catch (err) {
    console.log(err.message);
}
console.log(a);
console.log("Q2------------");
let b = "bingo";
function mani() {
    //console.log(b);
    let b = "kemisetty";
    console.log(b);
}
mani();
console.log("Q3------------");
let c = {
    id: 1,
    title: "bingo",
    price: 50,
    printOrder: function () {
        console.log(this.id + " " + this.title + " " + this.price);
    },
    getprice: function () {
        return this.price;
    }
};
c.printOrder();
console.log(c.getprice());
let d = {};
Object.assign(d, c);
console.log(d);
console.log("Q4------------");
let e = (a) => {
    let arr = [];
    for (let e of a) {
        let s = e;
        let sl = e.length;
        arr.push({ s, sl });
    }
    return arr;
};
let f = ["mani", "kant", 'uma', "vijay"];
console.log(e(f));
console.log("Q5------------");
let q5 = {
    add: function (a = 10, b = 20) {
        return a + b;
    },
    userFriends: function (u, ...uf) {
        console.log(u);
        uf.forEach(e => { console.log(e); });
    },
    printCapitalnames: function (a, b, c, d, e) {
        for (let i = 0; i < arguments.length; i++) {
            let s = arguments[i].toUpperCase();
            console.log(s);
        }
    }
};
console.log(q5.add());
q5.userFriends("mani", 'a', 'as', 'v', 'g');
q5.printCapitalnames("kemisetty", "uma", 'vijay', 'sai', 'naga');
console.log("Q6------------");
console.log(`laptop model: sc123
desk no: 3
name: mani`);
console.log("Q7------------");
let arr = ['uma', 'vijay', 'sai', 'naga'];
let [, , aa,] = arr;
console.log(aa);
let bb = { name: "kemisetty",
    address: { state: "Ap", pin: 12345 }
};
//let {,address: cc{,pin: ee}}=bb;
let { address: { pin: ee } } = bb;
console.log(ee);
console.log("Q8------------");
document.write('<script type ="module" src="./src/module1.js"></script>');
//# sourceMappingURL=Assignment1.js.map