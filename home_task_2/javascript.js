let example_1 = {}+[]+{}+[1];
let example_2 = '0[object Object]' + [1];
let example_3 = (!+[]) + [] + (![]);
let example_4 = new Date(0) + 0;
let example_5 = +'10' === 10;
let example_6 = {} + '' + [14]; 
let example_7 = {NaN}+[4]+{}+[1];
let example_8 = 14 && NaN & -4;
let example_9 = 2 > 3 & 8 & 2 < 3;
let example_10 = NaN && false || 1;

let list = [example_1, example_2, example_3, example_4, example_5, example_6, example_7, example_8, example_9, example_10];
list.forEach(item => console.log(item, typeof item));