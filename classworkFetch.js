let url = "https://643d0774f0ec48ce904fcb4e.mockapi.io/user";
async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data, "data");
}
getData();

// async function postData() {
//   let res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "John Doe",
//       city: "NYC",
//     }),
//   });
//   let data = await res.json();
//   console.log(data, "data");
// }
// postData();

// async function putData() {
//   let res = await fetch(url + "/12", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: "rashad",
//       city: "nairobi",
//     }),
//   });
//   let data = await res.json();
//   console.log(data, "data");
// }
// putData();

async function deleteData() {
  let res = await fetch(url + "/12", {
    method: "DELETE",
  });
  let data = await res.json();
  console.log(data, 'data');
}
// deleteData();
