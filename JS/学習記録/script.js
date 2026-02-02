const inputText = document.getElementById("inputText")
const inputTime = document.getElementById("inputTime")
const inputButton = document.getElementById("inputButton")

// 入力された文字を変数に保存するか？
// 学習時間を定数に保存するか？

inputButton.addEventListener('click',()=>{
    const addText = inputText.value
    const addTime = inputTime.value
    const P = document.createElement("p")
    const div1 = document.getElementById("div1");
    
    const li = 
    div1.appendChild(document.createElement("section"))
    .appendChild(document.createElement("ul"))
    .appendChild(document.createElement("li"));
    li.textContent = `勉強内容：${addText}  勉強時間：${addTime+1}`
    
})


