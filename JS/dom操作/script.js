// elementの取得
const button = document.getElementById("button")
const test = document.getElementById("test")
const completeButton = document.getElementById("completeButton")


// イベントリスナー
button.addEventListener("click",()=>{
 
    const li = document.createElement('li')
    li.innerText = "こんにちわ"
    //  親要素の末尾に要素が追加
    test.appendChild(li)

   
})


// closest()は該当のタグから一番近いタグを検索する。
// 例) const deletTaarget = deleteButton.closest("li");
// すでに DOM 上に存在している要素
completeButton.addEventListener("click", () => {
  const lastLi = test.lastElementChild;
  if (lastLi) {
    test.removeChild(lastLi);
  }
});
