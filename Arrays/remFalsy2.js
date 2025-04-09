// pending
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: "",
  g: "a",
  h: [null, false, '', true, 1, 'a'],
  i: { j: 0, k: false, l: 'a' }
};

for (key in obj) {
  if (!Boolean(obj[key])){
    delete obj[key];
  }
  else if (Array.isArray(obj[key])) {
    obj[key] = obj[key].filter((item) => Boolean(item));
  }
  else if (typeof obj[key] === "object") {
    const obj2 = Object.assign({}, obj[key]);
    for(key2 in obj2) {
      if (!Boolean(obj2[key2])){
        delete obj2[key2];
      }
    }
    obj[key] = obj2;
  }
}

console.log(obj);