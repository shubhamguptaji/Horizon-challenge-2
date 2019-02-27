// export const fetchProductCategories = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/AllProductCategories');
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const fetchProductCategories = async query => {
  try {
    const response = await fetch(
      `http://localhost:3000/Search?q=${query}&ps=50&pc=1&c=CLIENT`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
