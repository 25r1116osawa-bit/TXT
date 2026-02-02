// const で定義したオブジェクトはプロパティの変更が可能

const val = {
    name:"tatsuki",
    age: 37
};
val.name = "saori";

const arr = ["dog","cat"]
arr[0] ="bird";
arr.push["monkey"];


// 分割代入
// オブジェクト
const myprofile ={
    name:"たつき",
    age:37
}
const {name,age }= myprofile;


// 配列
const myprofile2 = ["たつき",37]
const [name1,age1 ] = myprofile2


// デフォルト値
const sayhello = (name="ゲスト") => console.log(`こんにちわ${name}さん`)


const myprofile3 ={
    age2:31
};

const {age2,name2 = "tatsuki"} = myprofile3
console.log(age2);
console.log(name2);


