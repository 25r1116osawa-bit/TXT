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



//生DOM


// ① 要素を取得する（超頻出）
document.getElementById("title")
document.querySelector(".item")
document.querySelectorAll("li")
// closest()は該当のタグから一番近いタグを検索する。
const deleteButton = document.createElement('button')
completeButton.innerText = "完了"
const deletTaarget = deleteButton.closest("li");

// Reactでは 👉 自分で取得しない
// <h1>タイトル</h1>


// ② テキストを書き換える
element.textContent = "Hello"

// React
// <h1>{text}</h1>
// setText("Hello")

// ③ クラスを変更する
element.classList.add("active")
element.classList.remove("active")

// React
// <div className={isActive ? "active" : ""}></div>

// ④ 表示・非表示を切り替える
element.style.display = "none"

// React
{isOpen && <Modal />}

// クリック・イベント処理（激頻出）
button.addEventListener("click", () => {})

// React 
// 引数がない場合
// <button onClick={handleClick}>押す</button>

// 引数がある場合 アロー関数でかかなければ即時実行される。　handleclick(index)
// <button onClick={() => deleteItem(index)}>削除</button>

// フォームの値を取得する（重要）
input.value

// React
// <input className='inputTodo' placeholder='todoを入力' value={inputText} onChange={onChangeInput}  />
// const onChange = (e) => {setText(e.target.value)}

// ⑦ 要素を追加・削除する
parent.appendChild(child)
parent.removeChild(child)

// React
{items.map(item => <li key={item.id}>{item.name}</li>)}

// ⑧ スクロール・フォーカス制御
element.scrollIntoView()
element.focus()

// Reactでは（ref使用）
ref.current.focus()