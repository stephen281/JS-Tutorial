const obj = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

const resObj = {};

for (prop in obj) {
  resObj[obj[prop]] = prop;
}

console.log(resObj);

console.log(obj.hasOwnProperty("red"));
