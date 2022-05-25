// var i = "aaa";

// console.log(i);

// const arr1 = [1, 2];
// console.log(arr1);

// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列の結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];

const nameArr = ["田中", "山田", "じゃけ"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// let newNumArr = [];
// for (let index = 0; index < numArr.length; index++) {
//   if(numArr[index] % 2 === 1){
//     newNumArr.push(numArr[index]);
//   }
// }
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "じゃけ") {
    return name;
  } else {
    return `${name}さん`;
  }
});

console.log(newNameArr);
