// // const で定義したオブジェクトはプロパティの変更が可能

// const val = {
//     name:"tatsuki",
//     age: 37
// };
// val.name = "saori";

// const arr = ["dog","cat"]
// arr[0] ="bird";
// arr.push["monkey"];


// // 分割代入
// // オブジェクト
// const myprofile ={
//     name:"たつき",
//     age:37
// }
// const {name,age }= myprofile;


// // 配列
// const myprofile2 = ["たつき",37]
// const [name1,age1 ] = myprofile2


// // デフォルト値
// const sayhello = (name="ゲスト") => console.log(`こんにちわ${name}さん`)


// const myprofile3 ={
//     age2:31
// };

// const {age2,name2 = "tatsuki"} = myprofile3
// console.log(age2);
// console.log(name2);



// オブジェクトの省略記法
const name ="たつき";
const age = 37;

const myprofile ={
    name:name,// ここを省略できる。
    age:age   // ここを省略できる。
};

// スプレッド構文

// 配列の展開
const arr1 = [1,2];
console.log(arr1);   // [1,2]
console.log(...arr1) // 結果 1 2

// 通常　配列の中身を合計したい場合下記のように書く
const sumFunc = (num1,num2) => console.log (num1+num2)
sumFunc(arr1[0],arr1[1]);
// 以下はスプレッド構文を使った計算結果
sumFunc(...arr1);



// まとめる 配列の分割代入をする際によく使う
const arr2 = [1,2,3,4,5];
const [num1,num2,...arr3] = arr2;
console.log(num1); //結果 1
console.log(num2); //結果 2
console.log(arr3); //結果 [3,4,5]

// 配列のコピー結合　一番多い使い方
const arr4 = [10,20];
const arr5 = [30,40];


// 配列のコピー
const arr6 = [...arr4]; // 結果 [10,20]

// 配列の結合
const arr7 = [...arr4,...arr5]; //結果 [10,20,30,40]



// map filter

const nameArr = ["田中", "山田", "樹"];

// ポイントとしては、Map関数の中に関数を書くこと
map(()=>{})

nameArr.map((name) => {
  console.log(name);
});

// 基本的にはreturnして、新しい配列を作るのがよいが必ずしもreturnが必要な訳でもない。
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

// map の第二引数でindexを使える
nameArr.map((name,index)=>{
    console.log(`${index+1}番目は${name}です。`)
})

// 樹以外はさんをつける。
// 三項演算子を使うとすっきりする。
nameArr.map((name,index)=>{
    console.log(
        index !==2
        ? `${index + 1}番目は${name}さんです。`
        : `${index + 1}番目は${name}です。`
    )
})


// filterは配列をフィルタリングして新しい配列を作る
// 以下は奇数だけを取り出した例
// returnの後ろに条件式を書く
const newArr = [1,2,3,4,5];
const newNumArr = newArr.filter((num)=>{
    return num % 2 ===1;
})
console.log(newNumArr) // [1,3,5]

// ある条件 ? 条件がtrueの時：条件がfakseの時
const val1 = 1 < 2 ? "trueです" : "falseです";
console.log(val1)



// toLocaleString()は３桁区切りでカンマをつける。

const num = "1300";
console.log(num.toLocaleString())

// numが文字の場合"数値を入力してください”と表示させる。
const formattedNum = typeof num === 'number' ? num.toLocaleString() :"数値を入力してください。"
console.log(formattedNum);



const checksum = (num1,num2) =>{
    return num1 + num2 > 100 ? "100を超えています" :"許容範囲ないです。"
}

console.log(checksum(50,49))