const arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

const res = arr.filter((val, idx, arr) => Boolean(val));
console.log(res);
