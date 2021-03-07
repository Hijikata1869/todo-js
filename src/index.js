// // varは再宣言、再代入可能
// var val = "val1";
// console.log(val);
// var val = "val2";
// console.log(val);

// // letは再宣言不可、再代入可能
// let val2 = "val3";
// val2 = "val4";
// console.log(val2);

// // constは再宣言、再代入不可
// const val3 = "val5";
// console.log(val3);

// // テンプレート文字列
// const name = "じゃけえ";
// const age = 28;
// 私の名前はじゃけぇです。年齢は２８歳です。
// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// 分割代入
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);
const myProfile = ["じゃけぇ", 28];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
