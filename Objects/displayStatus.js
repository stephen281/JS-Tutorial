var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

library.forEach((val, idx, arr) => {
  if (val.readingStatus) {
    console.log(`Already read ${val.title} by ${val.author}`);
  } else {
    console.log(`You still need to read ${val.title} by ${val.author}`);
  }
});

library.sort((a, b) => {
  if (a.author < b.author) {
    return -1;
  } else if (a.author > b.author) {
    return 1;
  }
  return 0;
});

console.log(library);
