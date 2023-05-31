const items = [2,8,true,"seed", [7,9]];
const a =new Array(2, 8,true,"seed");
console.log(items);
console.log(a);

console.log(items[3]);
console.log(items[4][1]);

items.push(6);
console.log(items);

items.unshift("fruit");
console.log(items);

items.pop();
console.log(items);

items.shift();
console.log(items);

//Given an array of numbers,return an array x with each item multiplied by 4
let num = [1,3,4,6,9,34];
let x = num.map(function(item){
   return item * 4
})
console.log(x);

let x1 = [];
num.forEach(function(item){
   //console.log(item * 4)
   x1.push(item * 4)
})
console.log(x1);

//Array concatenation
let mix = items.concat(num);
console.log(mix);

//spread operation
let b = [false, "deny", ...num];
console.log(b);

let [z, w, y] = [1, 3, 4];
console.log({z});
console.log({w});
console.log({y});

let [r, h, ...ooo] = [1, 3, 4, 7, 9, 78];
console.log({r});
console.log({h});
console.log({o});
