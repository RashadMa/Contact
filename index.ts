import axios from "axios";
const readline = require("readline-sync");
//#region Options

const options = [
  "Add Customer",
  "Delete Customer",
  "Update Customer",
  "Get London City Company Names",
  "Get NULL Regions",
];

//#endregion

const instance = axios.create({
  baseURL: "https://northwind.vercel.app/api/customers/",
});

type Address = {
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
};

type Customer = {
  id: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: Address;
};

//#region Main Method

Main();
async function Main() {
  let answer = readline.keyInSelect(options);
  answer++;
  switch (answer) {
    case 1:
      await PostCustomer();
      break;
    case 2:
      await DeleteCustomer();
      break;
    case 3:
      await UpdateCustomer();
      break;
    case 4:
      await GetLondonCompanies();
      break;
    // case 5:
    //   await
    //   break;
    // case 0:
    // break;
    default:
      console.log("Select proper answer");
      break;
  }
}

//#endregion

//#region Post Customers

async function PostCustomer() {
  let companyName = readline.question("Company Name: ");
  let contactName = readline.question("Contact Name: ");
  let contactTitle = readline.question("Contact Title: ");
  let address = {
    street: readline.question("Street: "),
    city: readline.question("City: "),
    region: readline.question("Region: "),
    postalCode: readline.question("Postal Code: "),
    country: readline.question("Country: "),
    phone: readline.question("Phone: "),
  };
  let response = await instance.post("", {
    companyName,
    contactName,
    contactTitle,
    address,
  });
  console.log(response.data);
  return response.data;
}

//#endregion

//#region Delete Customer

async function DeleteCustomer() {
  let id: string = readline.question("Customer ID: ").trim().toUpperCase();
  let response = await instance.delete("" + id);
  console.log(response.data);
  return response.data;
}

//#endregion

//#region Update Customer

async function UpdateCustomer() {
  let id: number = readline.question("Customer ID: ").trim().toUpperCase();
  let companyName = readline.question("Company Name: ");
  let contactName = readline.question("Contact Name: ");
  let contactTitle = readline.question("Contact Title: ");
  let address = {
    street: readline.question("Street: "),
    city: readline.question("City: "),
    region: readline.question("Region: "),
    postalCode: readline.question("Postal Code: "),
    country: readline.question("Country: "),
    phone: readline.question("Phone: "),
  };
  let response = await instance.put("" + id, {
    companyName,
    contactName,
    contactTitle,
    address,
  });
  console.log(response.data);
  return response.data;
}

//#endregion

//#region Get London City Company Names

async function GetLondonCompanies() {
  const response = await instance.get("");
  let data = response.data;
  let mapAddress = data.map((item: { address: Address }) => {
    return item.address;
  });
  let filteredData = mapAddress.filter(
    (item: { city: string }) => item.city === "London"
  );
  // mapAddress.forEach((element) => {
  //   console.log(element.city, "city");
  // });
  console.log();

  // console.log(filteredData);
  return data;
}

//#endregion
