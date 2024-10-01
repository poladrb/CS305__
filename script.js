////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

// 2.Divide 10 by 2 add result to variables x, and console x:

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

// 5.Console the remainder(%) when 17 is divided by 12.

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence, console result.

// 1
console.log(12 * 8); //96
// 2
let x = 10 / 2;
console.log(x);
// 3
let num1 = 20;
let num2 = 17;
console.log(num1 + num2);
// 4
const name = "Polad";
const surname = "Bayramli";
let year = 2006;
let info = name + " " + surname + "," + year;
console.log(info); //Polad Bayramli,2006
// 5
console.log(17 % 12); //5
// 6
let cityName = "Baku";
cityName = "Gence";
console.log(cityName); //Gence ("cityName" dəyişəninə əvvəl "Baku" təyin etsək də sonra "Gence" təyin edərək dəyişirik. Buna görə də consol-a "Gence" çıxmalıdır)

////////////// TASK 2 //////////////

console.log('test1', test); // test1 underfined
{
    let test = "something"
    console.log('test2', test); // test2 something
}
console.log('test3', test);  // test3 underfined

console.log('test1', test);  // test1 underfined
{
    var test = "something"
    console.log('test2', test); // test2 something
}
console.log('test3', test); // test3 something

// Əgər blokun icində dəyişən "let" və ya "const" ilə verilibsə onda blokdan xaricdə dəyişənə verinən dəyər oxunmur.
// Əgər "var" ilə verilibsə onda artıq blokdan xaricdə də dəyişəni log etsək  dəyəri görünəcək.

////////////// TASK 3 //////////////

//Find the type of all the following cases

let name1 = "Ulfat";
console.log(typeof name1);
let surname1 = "Zakirli";
console.log(typeof surname1);
let year1 = 2000;
console.log(typeof year1);
year1 = "2000";
console.log(typeof year1);
let city;
console.log(typeof city);
let qualification = null;
console.log(typeof qualification);
let obj = { name: "ulfat" };
console.log(typeof obj);
let arr = ["a", "b", "c"];
console.log(typeof arr);

////////////// TASK 4 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)

// 1
c = 0;
i = 0;
for (; c < arr1.length; ) {
  i = i + arr1[c];
  c = c + 1;
}
console.log(i);
//  Burada "c"-dən həm for-un döngüsünün sayının düz olmağında istifadə edirik həm də döngü zamanı toplanan ədədlərin düzgün indexsinin yazılmasında istifadə olunur.
// "i" isə hər döngüdə "arr1"-dən sıraya uyğun olaraq ədədi götürür və toplayır.

// 2
arr1.push(10, 88);
console.log(arr1);
// push() metodu ilə array-a simvollar əlavə etmək olur. push() metodu simvolları listin sonuna əlavə edir.

// 3
arr1.splice(0, 2);
console.log(arr1);
// splice() metodu list-dən element silmək üçün istifadə olunur. (0,2)--bu isə "0" indexsindən başlayaraq 2 elenmentin islinməsini göstərir.

// 4
arr1.splice(0, 0, 0, 9, 11);
console.log(arr1);
// yenid'n splice() metodundan istifadə etdik. (0,0,0,9,11)--ilk 2 "0" heç bir sinvolun silinməməli olduğunu göstərir, sonrakı 0,9,11 isə bu sinvolların əlavə olunmasını bildirir.
// Bəs necə oldu ki, qarşısına əlavə olundu?---ilk yazdığımız "0" əlavə olunacaq simvolların hansı indexdən başlayaraq əlavə olunacağını göstərir.

// 5
arr1.splice(0, 4);
console.log(arr1);

////////////// TASK 5 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"
///////////////////////////////////////////////////////////////////////////////////////////
// 1
const infoObject = {
  firstName: "Polad",
  lastName: "Bayramli",
  age: 18,
  city: "Baku",
};

// 2
infoObject.firstName = "Jhon";
console.log(infoObject);
//////////////////////////////////////////////////////////////////////////////////////////
const user = {
  email: "ulfat@gmail.com",
  info: {
    gender: "Male",
    loc: {
      city: "Baku",
      street: "Nizami 22",
      education: {
        "uni name": "ADNSU",
      },
    },
  },
};

// 3.console each value of user object
// 4.Console only keys of user
// 5.Console only values of user

// 3
console.log(user.email);
console.log(user.info.gender);
console.log(user.info.loc.city);
console.log(user.info.loc.street);
console.log(user.info.loc.education["uni name"]);
// 3-cü tapşırığı yuxarıdakı (user)object-ə əsasən yazmışam.
// 4 və 5-i özüm yaratdığım (infoObject)objectə uyğun yazmışam
console.log(" ");

// 4
for (keys in infoObject) {
  console.log(keys);
}

console.log(" ");
// 5
for (values in infoObject) {
  console.log(infoObject[values]);
}
//////////////////////////////////////////////////////////////////
const mixedObject = {
  name: "Ulfat",
  age: 25,
  isStudent: false,
  hobbies: null,
  year: 2024,
  address: undefined,
  surname: "Zakirli",
  contactInfo: {
    email: "ulfat@example.com",
    phone: null,
  },
  scores: [98, 87, 92],
};
console.log(" ");


// 6.Log only the 'keys' whose values are of type string
// 7.Log only the 'keys' whose values are of type number
// 8.Log only the 'keys' whose values are of type boolean
// 9.Log only the 'keys' whose values are of type undefined
// 10.Log only the 'keys' whose values are of type object
// 11.Repeat (6,7,8,9,10) tasks but now log 'values'

// 6
i=0
for (key in mixedObject) {
  type = typeof mixedObject[key];
  if ((type === 'string')) {
    console.log(key);
    i=i+1
    continue
  }else if(i=0) {
    console.log("no such value");
  }
    
}
console.log(" ");

// 7
i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'number')) {
        console.log(key);
        i=i+1
    }else if(i=0){
        console.log("no such value");
    }
   
  
}
console.log(" ");

// 8
i=0
for (key in mixedObject) {
  type = typeof mixedObject[key];
  if ((type === 'boolean')) {
    console.log(key);
    i=i+1
  }else if (i=0){
    console.log("no such value");
  }

}
console.log(" ");

// 9
i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'underfined')) {
      console.log(key);
      i=i+1
    }else if(i=0){
        console.log("no such value");
    }
  }
  console.log(" ");

// 10
i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'object')) {
      console.log(key);
      i=i+1
    }else if(i=0){
        console.log("no such value");
    }
  }
  console.log(" ");

// 11

i=0
for (key in mixedObject) {
  type = typeof mixedObject[key];
  if ((type === 'string')) {
    console.log(key + ":" + mixedObject[key]);
    i=i+1 // Əgər heç string olmasa i=0 olur və "no such value"-i consola çıxarır.
    continue
  }else if(i=0) {
    console.log("no such value");
  }
    
}
console.log(" ");

i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'number')) {
        console.log(key + ":" + mixedObject[key]);
        i=i+1
    }else if(i=0){
        console.log("no such value");
    }
   
  
}
console.log(" ");

i=0
for (key in mixedObject) {
  type = typeof mixedObject[key];
  if ((type === 'boolean')) {
    console.log(key + ":" + mixedObject[key]);
    i=i+1
  }else if (i=0){
    console.log("no such value");
  }

}
console.log(" ");

i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'undefined')) {
      console.log(key + ":" + mixedObject[key]);
      i=i+1
    }else if(i=0){
        console.log("no such value");
    }
  }
console.log(" ");

i=0
for (key in mixedObject) {
    type = typeof mixedObject[key];
    if ((type === 'object')) {
      console.log(key + ":" + mixedObject[key]);
      i=i+1
    }else if(i=0){
        console.log("no such value");
    }
  }