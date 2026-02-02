const inputText = document.getElementById("inputText")
const inputTime = document.getElementById("inputTime")
const inputButton = document.getElementById("inputButton")
const output = document.getElementById("output")

// 入力された文字を変数に保存するか？
// 学習時間を定数に保存するか？
let totalStudy = 0;

inputButton.addEventListener('click',()=>{
    const addText = inputText.value;
    const addTime = Number(inputTime.value) // 数値に変換
    const P = document.createElement("p")
    const div1 = document.getElementById("div1");
    
     if(!isNaN(addTime)){
        totalStudy +=addTime;
        output.innerText = totalStudy;
    const li = 
    div1.appendChild(document.createElement("section"))
    .appendChild(document.createElement("ul"))
    .appendChild(document.createElement("li"));
    li.textContent = `勉強内容：${addText}  勉強時間：${addTime}`
    inputText.value = "";
inputTime.value = "";
     }else {
    alert("数値以外が入力されています");   
    }
}
)




