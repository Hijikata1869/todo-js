// varは再宣言、再代入可能
var val = "val1";
console.log(val);
var val = "val2";
console.log(val);

// letは再宣言不可、再代入可能
let val2 = "val3";
val2 = "val4";
console.log(val2);

// constは再宣言、再代入不可
const val3 = "val5";
console.log(val3);
