// 1

let a = prompt('Ввердите число:', '');
let b = prompt('Ввердите число:', '');
let c = prompt('Ввердите число:', '');

if (a <= b) {
    if (b <= c) {
        alert(a, b, c);
    } else if (a <= c) {
        alert(a, c, b);
    } else {
        alert(c, a, b);
    };
} else if (c <= b) {
     alert(c, b, a);
} else if (a <= c) {
    alert(b, a, c);
} else {
    alert(b, c, a);
};

console.log(a, b, c);

// 2

let temp = 0;
let F = 1;
let C = 1;
let K = 1;

if (temp === F) {
    if (F === temp);
    if (C = (F - 32) * 5 / 9);
    if (K = C + 273.15); {
        console.log(F, K, C);
    };
} else if (temp === C) {
    if (C === temp);
    if (F = (C * 9 / 5) + 32);
    if (K = C + 273.15); {
        console.log(C, F, K);
    };
} else {
    if (K === temp);
    if (C = K - 273.15);
    if (F = (C * 9 / 5) + 32); {
        console.log(K, C, F);
    };
};
