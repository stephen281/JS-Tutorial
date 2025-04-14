const url = "https://dummyjson.com/recipes";

// const getRecipes = fetch(url);
// getRecipes
//   .then((response) => response.json())
//   .then((result) => console.log(result.recipes.length))
//   .catch((error) => {
//     console.error(error);
//   });

async function getAllRecipes(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const recipes = result.recipes;
    // add author: apabrita in every single element in recipes.
    const updatedRecipes = recipes.map((item) => {
      return {
        ...item,
        safe: "Apabrita",
      };
    });
    // console.log(updatedRecipes[0]);

    // find the highest rating
    const maxRating = recipes.reduce((max, item) => {
      return item.rating > max.rating ? item : max;
    });
    // console.log(maxRating);

    // filter those recipes whose having rating below 4.
    let lessRating = recipes.filter((item) => item.rating < 4.5);
    console.log(lessRating.length);
  } catch (error) {
    console.log(error);
  }
}

getAllRecipes(url);
