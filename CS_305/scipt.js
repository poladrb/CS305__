////////////// TASK 1 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1.1
// let result = arr1.reduce((sum, item) => sum + item, 0);
// console.log(result);

// 1.2
// sum = 0;
// for (i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }
// console.log(sum);

// 1.3
// sum_1 = 0;
// let result1 = arr1.map((item) => (sum_1 += item));
// console.log(sum_1);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2
// arr1.push(10, 88);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.1
// arr1.splice(0, 2);
// 3.2
// arr1.shift()
// arr1.shift()
// console.log(arr1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4.1
// arr1.unshift(0,9,11)
// 4.2
// arr1.splice(0,0,0,9,11)
// console.log(arr1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.1
// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// 5.2
// arr1.splice(0,4)
// console.log(arr1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////// TASK 2 //////////////
const arr2 = [
  "Sabir",
  "Fatime",
  "Rufet",
  "Mehman",
  "Fatime",
  "Gunel",
  "Fatime",
  "Cavid",
  "Ramin",
  "Ali",
  "Polad",
];
// 1.Console values from "Rufet" to "Ali"
// 2.Change Mehman to Fidan
// 3.Console each name with map
// 4.Console only names which is Fatime
// 5.Console all names where name is Gunel, then change it to "Nihad"
// 6.Console last second value of arr2
// 7.Console length of arr2

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1.1
// for (i in arr2) {
//   if (arr2[i] === "Rufet") {
//     for (b = i; b <= arr2.length - i; b++) {
//       if (arr2[b] !== "Ali") {
//         console.log(arr2[b]);
//       } else {
//         console.log(arr2[b]);
//         break;
//       }
//     }
//   }
// }

// 1.2
// let result4 = arr2.slice(arr2.indexOf("Rufet"), arr2.indexOf("Ali"));
// console.log(result4);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2
// for (i = 0; i < arr2.length; i++) {
//     if(arr2[i]==="Mehman"){
//         arr2.splice(i,1,"Fidan")
//     }
// }
// console.log(arr2);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 3
// let result =arr2.map(item=>console.log(item))

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4
// let result =arr2.filter(item=> item==="Fatime" )
// for(i in result){
//     console.log(result[i]);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5
// for(i=0;i<arr2.length;i++){
//     if(arr2[i]!=="Gunel"){
//         console.log(arr2[i]);

//     }else{
//         console.log("Nihad");

//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 6.1

// for(i=0;i<arr2.length;i++){
//     if(i>arr2.length-3){
//         console.log(arr2[i]);

//     }
// }

// 6.2
// let result =arr2.filter(item=> arr2.indexOf(item)>arr2.length-3)
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// 7
// console.log(arr2.length);

///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////// TASK 3 //////////////
const arr3 = [
  "9",
  10,
  100,
  11,
  "true",
  "undefined",
  true,
  null,
  "something",
  false,
];
// 1.Show only numbers
// 2.Show only true values
// 3.Show only false values
// 4.Show only strings

// 1
// for(i=0;i<arr3.length;i++){
//     if(typeof arr3[i]==="number"){
//         console.log(arr3[i]);

//     }
// }
// console.log(" ");
//////////////////////////////////////////////////////////////////////////////////////////////////////

// 2
// for(i=0;i<arr3.length;i++){
//     if(typeof arr3[i]==="string"){
//         console.log(arr3[i]);

//     }
// }
// console.log(" ");
/////////////////////////////////////////////////////////////////////////////////////////////////////

// 3
// for(i=0;i<arr3.length;i++){
//     if(arr3[i]){
//         console.log(arr3[i]);

//     }
// }
// console.log(" ");
///////////////////////////////////////////////////////////////////////////////////////////////////////

// 4
// for(i=0;i<arr3.length;i++){
//     if(arr3[i]){
//     }else{
//         console.log(arr3[i]);
//     }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////// TASK 4 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25];
// 1.Console (only even numbers)
// 2.Console (only odd numbers)

// 1.1
// let result = arr3.filter(item => item%2===0)
// console.log(result);
// 1.2
// for(i=0;i<arr3.length;i++){
//     if(arr3[i]%2===0){
//         console.log(arr3[i]);

//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.1
// let result = arr3.filter(item => item%2!==0)
// console.log(result);

// // 2.2
// for(i=0;i<arr3.length;i++){
//     if(arr3[i]%2!==0){
//         console.log(arr3[i]);

//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////// TASK 5 //////////////
const arr4 = [
  10,
  "29",
  10,
  100,
  11,
  "true",
  false,
  "undefined",
  true,
  null,
  "something",
  false,
];
// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]

// 2.Sum all numbers of arr4
// 3.Count only the values that are true
// 4.Count only the values that are string
// 5.Count only the values that are false

// 1
// yeni_arr =[]
// for(i=0;i<arr4.length;i++){
//     if(typeof arr4[i]==="number"){
//         yeni_arr.push(arr4[i]+ 10)
//     }else if(typeof arr4[i]==="string"){
//         yeni_arr.push(arr4[i]+ " is string")
//     }else{
//         if(arr4[i]){
//             yeni_arr.push(true)
//         }else{
//             yeni_arr.push(arr4[i]+" is falsy value")
//         }
//     }
// }
// console.log(yeni_arr);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.1
// let result = arr4.reduce((sum, item) => typeof item === "number" ? sum + item : sum, 0);
// console.log(result);

// 2.2
// sum1=0
// for(i=0;i<arr4.length;i++){
//     if(typeof arr4[i]==="number"){
//         sum1+=arr4[i]
//     }
// }
// console.log(sum1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3
// sum_1=0
// for(i=0;i<arr4.length;i++){
//     if(arr4[i]){
//         sum_1+=1
//     }
// }
// console.log(sum_1);

////////////////////////////////////////////////////////////////////////////////////////////////

// 4
// sum_3=0
// for(i=0;i<arr4.length;i++){
//     if(typeof arr4[i] === "string"){
//         sum_3+=1
//     }
// }
// console.log(sum_3);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5
// sum_2=0
// for(i=0;i<arr4.length;i++){
//     if(arr4[i]){

//     }else{
//         sum_2+=1
//     }
// }
// console.log(sum_2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////// TASK 6 //////////////

let fullName = "Polad Bayramli Ruslan";

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// 3) Alinan yeni arrayi stringe cevirin(join)

// 1
// full_name_arr=fullName.split('')
// console.log(full_name_arr);

////////////////////////////////////////////////////////////////////////////////////////////////

// 2
// function yeni(){
//     a=fullName.split(" ")
//     soyad=a[1]
//     a.splice(1,1)
//     a.unshift(soyad)
//     return a
// }
// console.log(yeni());

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3
// a=fullName.split(" ")
// soyad=a[1]
// a.splice(1,1)
// a.unshift(soyad)
// b= a.join(" ")
// console.log(b);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let arr = [
  8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6,
  3, 7, 3, 7,
];

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

// 4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// 5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// 6) arrayda tekrar olunan reqemleri artan sira ile duzun
// 7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// 8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
// 9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// 10) arraydaki en boyuk reqemin ilk indexini tapin
// 11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// 12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// 13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// 14) 7 reqeminin indexleri cemini tapin.

// 4
// sum=0
// for (i=0;i<arr.length;i++){
//   if(arr[i]===5){
//     sum+=1
//   }
// }
// console.log(sum);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5
// result=arr.reduce((acc,item)=>acc+item,0)
// console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6
// resulst=arr.sort()
// console.log(resulst);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7
// a=Math.max(...arr)
// console.log(a);

// sum=0
// for (i=0;i<arr.length;i++){
//   if(arr[i]===a){
//     sum+=1
//   }
// }
// console.log(sum);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8

// userName ='Polad'
// say=userName.length
// if(arr.includes(say)){
//   console.log(say +" arr-da var");

// }else{
//   console.log(say + " arr-a yoxdu");

// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9

// for(i=0;i<arr.length;i++){
//   if(arr[i]%3===2){
//     a=arr.indexOf(arr[i])
//     console.log(arr[i] + " index:" +a);
//     break
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 10

// a=Math.max(...arr)
// index=arr.indexOf(a)
// console.log(index);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11

// for(i=0;i<arr.length;i++){
//   if(arr[i]===4){
//     console.log(i);
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 12
// a_5 = []
// for(i=0;i<arr.length;i++){
//   if(arr[i]===5){
//     a_5.push(i)
//   }
// }

// console.log(Math.max(...a_5)-Math.min(...a_5));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 13

// aray=[]
// for(i=0;i<arr.length;i++){
//   if(arr[i]!==2){
//     aray.push(arr[i])
//   }
// }

// if(arr.length>aray.length){
//   console.log("arr-da daha chox simvol var");

// }else if(arr.length<aray.length){
//   console.log("aray-da daha chox simvol var");

// }else{
//   console.log("simvollari beraberdir");

// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 14
// sum=0
// for(i=0;i<arr.length;i++){
//   if(arr[i]===7){
//     sum+=i
//   }
// }
// console.log(sum);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////// TASK 7//////////////

let arr2_1 = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

//QEYD - !!! Bu tasklarda arr2_1   istifade edilecekdir və hər bir algorithm funksiya daxilində yazılmalıdır...

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// 16
// function yeni() {
//   a = arr2_1.filter((item) => item.name.startsWith("t"));
//   return a;
// }
// console.log(yeni());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  17
// function yeni_1() {
//   a = arr2_1.filter(
//     (item) => item.name.startsWith("t") && item.name.endsWith("t")
//   );
//   b = a.length;
//   return b;
// }
// console.log(yeni_1());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 18
// function yeni_2(a) {
//   b = a.reduce(
//     (sum, item) =>
//       item.name.startsWith("t") && item.name.endsWith("t")? sum + item.key: sum,0);
//   return b;
// }
// console.log(yeni_2(arr2_1));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 19
// function yeni_3() {
//   for (i = 0; i < arr2_1.length; i++) {
//     if (arr2_1[i].name.endsWith("e")) {
//       arr2_1[i].name = "SuperDev";
//     }
//   }
//   console.log(arr2_1);

// }
// console.log(yeni_3());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.

// 20
ss = [];
function yeni_4() {
  for (i = 0; i < arr2_1.length; i++) {
    ss.push(arr2_1[i].name.length);
  }
  s = ss.indexOf(Math.max(...ss));
  return arr2_1[s].key;
}
console.log(yeni_4());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 21
ss_1 = [];
function yeni_5() {
  for (i = 0; i < arr2_1.length; i++) {
    ss_1.push(arr2_1[i].name.length);
  }
  s = ss_1.indexOf(Math.max(...ss_1));
  return s ** 2;
}
console.log(yeni_5());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 22
ss_2 = [];
function yeni_6() {
  for (i = 0; i < arr2_1.length; i++) {
    if (arr2_1[i].name.length === 4) {
      ss_2.push(arr2_1[i]);
    }
  }
  return ss_2;
}
console.log(yeni_6());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 23
ss_3 = [];
function yeni_7() {
  for (i = 0; i < arr2_1.length; i++) {
    ss_3.push(arr2_1[i].key);
  }
  s = ss_3.indexOf(Math.max(...ss_3));
  return arr2_1[s].name;
}
console.log(yeni_7());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 24
ss_4 = [];

// function yeni_8() {
//   for (i = 0; i < arr2_1.length; i++) {
//     ss_4.push(arr2_1[i].name);
//   }
//   console.log(ss_4);
//   for (i = 0; i < ss_4.length; i++) {
//     sum = 0;    
//     for (j = 0; j < ss_4[i].length; j++) {
//       if (ss_4[i][j] === "L") {
//         sum += 1;
//       }if(sum===2){
//         return i
//       }
//     }
//   }
// }
// console.log(yeni_8());



for (i = 0; i < arr2_1.length; i++) {
  ss_4.push(arr2_1[i].name);
}
console.log(ss_4);
for (k = 0; k < ss_4.length; k++) {
  sum = 0;    
  // console.log(ss_4[k]);
  
  for (h = 0; h < ss_4[k].length; h++) {
    d=ss_4[h]
    if (d[h] === "L") {
      sum += 1;
    }if(sum===2){
      console.log(i);
      
    }
  }
}