const url = "https://dummyjson.com/comments";
// using promise chaining
// fetch(url)
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

async function getAllComments() {
  const response = await fetch(url);
  const result = await response.json();
  const allComments = result.comments;
  //   console.log(allComments);

  // print less popular comments
  const lessPopular = allComments.filter((item) => item.likes < 5);
  //   console.log(lessPopular);

  // sort all comments by likes in non-descending order.
  const sortedComm = allComments.sort(
    (itemA, itemB) => itemA.likes - itemB.likes
  );
//   console.log(sortedComm);

  // fetch a specific data
  let fetchData = allComments.find(
    (item) => item.user.fullName === "Nathan Dixon"
  );
  console.log(fetchData);
}

getAllComments();
