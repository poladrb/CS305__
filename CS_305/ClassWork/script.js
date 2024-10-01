let age = 18;
// let email = "username@gmail.com";
// let password = 1;
// let userName = "polad";
// let department = "IT";

// if (age > 22) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (email == "sabir@gmail.com" || email == "fidan@gmail.com") {
//   console.log("");
// } else {
//   console.log(false);
// }
// if (password.lenght > 7) {
//   console.log("password lenght is greater than 7");
// } else {
//   console.log("password lenght isn't greater than 7");
// }
// if (userName == "your name" && password != 29) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (department == "IT" && userName != "Ulfat") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let a = 9;
// let b = "9";
// let c = 9;
// console.log(a == b);
// console.log(a === b);
// console.log(a == c);
// console.log(a === c);
// console.log(b == c);
// console.log(b === c);

// let num = 14;

// if (num === 66 || num === 14) {
//   console.log("result 1");
// } else if (num === 6) {
//   console.log("result 2");
// } else if (num === 9 || num === 8) {
//   console.log("3");
// } else if (num === 14) {
//   console.log("4");
// } else {
//   console.log("end");
// }

// let user = "polad"; //Polad
// result = user.slice(0, 1);
// let result2 = user.slice(1, user.length);
// console.log(result.toUpperCase() + result2);

// let user1 = "polad"; //Polad
// let result4 = user1.slice(3, 4);
// let result3 = user1.slice(0, 2);
// result = user1.slice(4, 5);
// result2 = user1.slice(2, 3);
// console.log(result3 + result2.toUpperCase() + result4 + result.toUpperCase());

// let result = user.toUpperCase();

// if ("100" < "22") {
//   console.log("suc");
// }

// console.log("Fatimefmfn".toLowerCase().replaceAll("F".toLowerCase(), "t"));

// a = "djnjdddj";
// console.log(a.indexOf("j, 4"));

// // 1
// let text = "Code Academy CS305";
// let city = "Baku";
// let country = "Azerbaijan";

// for (i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }

// // 2
// console.log(city.concat(" " + country));

// // 3

// console.log(text.split(" "));

// // 4
// console.log(text.split(""));

// //  5
// console.log(country.indexOf("a"));

// // 6
// console.log(country.lastIndexOf("a"));

// // 7
// for (i of country) {
//   console.log(i);
// }

// // 8
// if (text.includes("CS")) {
//   console.log("success");
// } else {
//   console.log("fail");
// }

// // 9
// list = [];
// for (i = 0; i < 21; i++) {
//   list.push(i);
// }
// console.log(list);
// // 9.1
// a = "1 2 3 4 5";

// console.log(a.split(" "));

//////////////////////////////////////////////////////////////////////////////////////////////////

// const student = {
//     firstName: "Polad",
//     lastName: "Bayramli",
//     "fathet-name" : "Ruslan",
//     10 : 2006,
//     age: 18,
//     year : 2024,
//     uni: "UNEC",
//     loc: "Baku Azerbaijan",
//     isAdmin : true,
//     fin : undefined,
//     tax : null,
//     address: {
//       city :"Baku",
//       address: {
//           address : "Nerimanov",
//       },
//       country : "Azerbaijan",
//       extra: {
//           street: "Nerimanov"
//       }
//     }
//   };
//   student.seher = "Madrid"
//   student.city = {}

//   student.city.team = "Real Madrid"
//   console.log(student);

//   console.log(student);

//   console.log(student.isAdmin);

//   delete student.isAdmin
//   console.log(student.isAdmin);

//   console.log(student);
//   console.log(student.firstName);
//   console.log(student.lastName);
//   console.log(student["fathet-name"]);
//   console.log(student[10]);
//   console.log(student.age);
//   console.log(student.year);
//   console.log(student.uni);
//   console.log(student.loc);
//   console.log(student.isAdmin);
//   console.log(student.fin);
//   console.log(student.tax);
//   console.log(student.address.city);
//   console.log(student.address.address);
//   console.log(student.address.country);
//   console.log(student.address.extra.street);

//   for(let key in student){
//           console.log(key);

//       }
//       console.log(" ");

//       for(let values in student){
//               console.log(student[values]);
//       }
// let a;
// {
//    a = 1;
// }

// console.log(a);
// {
//   const b = 1;
// }

// // console.log(b);
// {
//   var c = 1;
// }

// console.log(c);

////////////////////////////////   ARRAY   //////////////////////////////////
// const arry1 = new Array()
// const arry2 = []

// const nums = [4, 5, 7, 8, 10, 33, 0];

// let mult = 1;
// for (let i = 0; i < nums.length; i++) {
//   mult = mult * nums[i];
// }
// console.log(mult);
// console.log(" ");


// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > 5 && nums[i] < 10) {
//     console.log(nums[i]);
//   }
// }
// console.log(" ");


// for (let i = 0; i < nums.length; i++) {
//   if (nums[i]) {
//     console.log(nums[i]);
//   }
// }
// console.log(" ");


// sumodd = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2) {
//     sumodd+=nums[i];
//   }
// }
// console.log(sumodd);
// console.log(" ");

// sumeven = 0;
// for (let i = 0; i < nums.length; i++) {
//   if (!(nums[i] % 2)) {
//     sumeven+=nums[i];
//   }
// }
// console.log(sumeven);

/////////////////////////    METHODS   /////////////////////////////////////////

// map,filter,sort,reverse,slice,findIndex

// const user =[
//     {
//         id : 1,
//         name : "Polad",
//         gender : "male",
//         age :18
//     },
//     {
//         id : 2,
//         name : "Nusret",
//         gender : "male",
//         age :18
        
//     },
//     {
//         id : 3,
//         name : "Gunel",
//         gender : "famale",
//         age :20
        
//     },
//     {
//         id : 4,
//         name : "Fidan",
//         gender : "famale",
//         age :20
        
//     },
//     {
//         id : 5,
//         name : "Sabir",
//         gender : "male",
//         age :32

//     }
// ]
// sum = 0
// const result = user.map(item => sum+=item.age)
// console.log(sum);

// const result1 = user.filter(item => item.gender === "famale")
// console.log(result1);

// const result3 = user.filter(item => item.age > 25)
// console.log(result3);

// const result4 = user.map(item => item.age *10)
// console.log(result4);

