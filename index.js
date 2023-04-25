"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var readline = require("readline-sync");
//#region Options
var options = [
    "Add Customer",
    "Delete Customer",
    "Update Customer",
    "Get London City Company Names",
    "Get NULL Regions",
];
//#endregion
var instance = axios_1.default.create({
    baseURL: "https://northwind.vercel.app/api/customers/",
});
//#region Main Method
Main();
function Main() {
    return __awaiter(this, void 0, void 0, function () {
        var answer, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    answer = readline.keyInSelect(options);
                    answer++;
                    _a = answer;
                    switch (_a) {
                        case 1: return [3 /*break*/, 1];
                        case 2: return [3 /*break*/, 3];
                        case 3: return [3 /*break*/, 5];
                        case 4: return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 9];
                case 1: return [4 /*yield*/, PostCustomer()];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 3: return [4 /*yield*/, DeleteCustomer()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 5: return [4 /*yield*/, UpdateCustomer()];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 7: return [4 /*yield*/, GetLondonCompanies()];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 9:
                    console.log("Select proper answer");
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
//#endregion
//#region Post Customers
function PostCustomer() {
    return __awaiter(this, void 0, void 0, function () {
        var companyName, contactName, contactTitle, address, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    companyName = readline.question("Company Name: ");
                    contactName = readline.question("Contact Name: ");
                    contactTitle = readline.question("Contact Title: ");
                    address = {
                        street: readline.question("Street: "),
                        city: readline.question("City: "),
                        region: readline.question("Region: "),
                        postalCode: readline.question("Postal Code: "),
                        country: readline.question("Country: "),
                        phone: readline.question("Phone: "),
                    };
                    return [4 /*yield*/, instance.post("", {
                            companyName: companyName,
                            contactName: contactName,
                            contactTitle: contactTitle,
                            address: address,
                        })];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    return [2 /*return*/, response.data];
            }
        });
    });
}
//#endregion
//#region Delete Customer
function DeleteCustomer() {
    return __awaiter(this, void 0, void 0, function () {
        var id, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = readline.question("Customer ID: ").trim().toUpperCase();
                    return [4 /*yield*/, instance.delete("" + id)];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    return [2 /*return*/, response.data];
            }
        });
    });
}
//#endregion
//#region Update Customer
function UpdateCustomer() {
    return __awaiter(this, void 0, void 0, function () {
        var id, companyName, contactName, contactTitle, address, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = readline.question("Customer ID: ").trim().toUpperCase();
                    companyName = readline.question("Company Name: ");
                    contactName = readline.question("Contact Name: ");
                    contactTitle = readline.question("Contact Title: ");
                    address = {
                        street: readline.question("Street: "),
                        city: readline.question("City: "),
                        region: readline.question("Region: "),
                        postalCode: readline.question("Postal Code: "),
                        country: readline.question("Country: "),
                        phone: readline.question("Phone: "),
                    };
                    return [4 /*yield*/, instance.put("" + id, {
                            companyName: companyName,
                            contactName: contactName,
                            contactTitle: contactTitle,
                            address: address,
                        })];
                case 1:
                    response = _a.sent();
                    console.log(response.data);
                    return [2 /*return*/, response.data];
            }
        });
    });
}
//#endregion
//#region Get London City Company Names
function GetLondonCompanies() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, mapAddress, filteredData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, instance.get("")];
                case 1:
                    response = _a.sent();
                    data = response.data;
                    mapAddress = data.map(function (item) {
                        return item.address;
                    });
                    filteredData = mapAddress.filter(function (item) { return item.city === "London"; });
                    // mapAddress.forEach((element) => {
                    //   console.log(element.city, "city");
                    // });
                    console.log();
                    // console.log(filteredData);
                    return [2 /*return*/, data];
            }
        });
    });
}
//#endregion
