let array = [1, 2, 3, 4, 5];

function getMinMax(array) {
  //   return { min: Math.min(...array), max: Math.max(...array) };
  return [Math.min(...array), Math.max(...array)];
}

console.log(getMinMax(array));
