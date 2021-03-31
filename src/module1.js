import {Saving,Current} from './module2.js';

let s1= new Saving(1,"mani",25,2);
let s2= new Saving(2,"kant",35,3);

let c1= new Current(3,"uma",50,6);
let c2= new Current(4,"vijay",42,7);

let total = function(){
  return s1.balance+s2.balance+c1.balance+c2.balance;
}

console.log(total());
