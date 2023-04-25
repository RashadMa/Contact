// const readline = require("readline-sync");
// const axios = require("axios");

// //#region Options

// const options = [
//   "Get Todos",
//   "Get No Completed Todos",
//   "Complete Todo",
//   "Add Todo",
//   "Delete Todo",
// ];

// //#endregion

// //#region Axios Create Method

// const instance = axios.create({
//   baseURL: "https://643d0774f0ec48ce904fcb4e.mockapi.io/",
// });

// //#endregion

// Main();

// //#region Main Function

// async function Main() {
//   let answer = readline.keyInSelect(options);
//   answer++;
//   switch (answer) {
//     case 1:
//       await GetTodos();
//       break;
//     case 2:
//       await GetNotCompletedTodos();
//       break;
//     case 3:
//       await PatchTodo();
//       break;
//     case 4:
//       await PostTodo();
//       break;
//     case 5:
//       await DeleteTodo();
//       break;
//     case 0:
//       break;
//     default:
//       console.log("Select proper answer");
//       break;
//   }
//   Main();
// }

// //#endregion

// //#region Get Todos With Axios

// async function GetTodos() {
//   const response = await instance.get("/todo");
//   console.log(response.data);
// }

// //#endregion

// //#region Get Non Completed Todos With Axios

// async function GetNotCompletedTodos() {
//   const response = await instance.get("/todo");
//   let filterData = await response.data.filter((item) => !item.completed);
//   console.log(filterData);
// }

// //#endregion

// //#region Patch Todo With Axios

// async function PatchTodo() {
//   let id = readline.question("Id: ");
//   const response = await instance.patch("/todo/" + id, {
//     completed: true,
//   });
//   console.log(response.data);
// }

// //#endregion

// //#region Post Todo With Axios

// async function PostTodo() {
//   let title = readline.question("Title: ");
//   const response = await instance.post("/todo", {
//     title: title,
//     completed: false,
//   });
//   console.log(response.data);
// }

// //#endregion

// //#region Delete Todo With Axios

// async function DeleteTodo() {
//   let id = readline.question("Id: ");
//   const response = await instance.delete("/todo/" + id);
//   console.log(response.data);
// }

// //#endregion

//--------------------------------------------------------------------------------------------------------------------------------

const readline = require("readline-sync");
const axios = require("axios");

//#region Options

const options = [
  "Get Most Expensive Items",
  "Get Average Stock Status",
  "Get Data Starting With 'C'",
];

//#endregion

//#region Axios Create Method

const instance = axios.create({
  baseURL: "https://northwind.vercel.app/api/products",
});

//#endregion

Main();

//#region Main Function

async function Main() {
  let answer = readline.keyInSelect(options);
  answer++;
  switch (answer) {
    case 1:
      await getall();
      break;
    case 2:
      await GetAverageStockStatus();
      break;
    case 3:
      await GetDataStartingWithC();
      break;
    case 0:
      break;
    default:
      console.log("Select proper answer");
      break;
  }
  Main();
}

//#endregion

//#region Get Most Expencive Item

async function GetMostExpenciveItem() {
  const response = await instance.get();
  let filterData = await response.data.sort(
    (a, b) => b.unitPrice - a.unitPrice
  );
  console.log(filterData[0]);
}

//#endregion

//#region Average Stock Status

async function GetAverageStockStatus() {
  const response = await instance.get();
  let length = await response.data.length;
  let filterData = await response.data.reduce((a, b) => {
    return a + b.unitsInStock;
  }, 0);
  console.log(filterData / length);
}

async function getall() {
  // let res = await axios.get("https://northwind.vercel.app/api/products");
  const response = await instance.get();
  let products = await response.data;
  let qiymet = 0;
  let k = products.reduce((a, b) => (a.unitPrice > b.unitPrice ? a : b));
  console.log(k);
}


//#endregion

//#region Get Data Starting With "C"

async function GetDataStartingWithC() {
  const response = await instance.get();
  let filterData = await response.data.filter((item) => {
    return item.name[0] === "C";
  });
  console.log(filterData);
}

//#endregion
