const inputTodo = document.getElementById('inputTodo');
const inputButton = document.getElementById('inputButton');

const completeTodos = document.getElementById('completeTodos');
const incompleteTodos = document.getElementById('incompleteTodos');

// console.log() // 入力した文字取得


const onClick = () => {
    const li = document.createElement('li');
    const completeButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    completeButton.innerText = "完了"
    deleteButton.innerText = "削除"

    completeButton.addEventListener("click", () => {

        const completeTarget = completeButton.closest("li")
        // 追加した要素をcompleteTodosの下の要素に入れたい
        completeTodos.appendChild(completeTarget)
        // この時にボタンを消す必要がある。
        completeTarget.removeChild(completeButton)
        completeTarget.removeChild(deleteButton)

        const returnButton = document.createElement("button")
        returnButton.innerText = "戻る"
        completeTarget.appendChild(returnButton)

        returnButton.addEventListener("click", () => {
            li.innerText = inputTodo.value
            incompleteTodos.appendChild(li)
            li.appendChild(completeButton)
            li.appendChild(deleteButton)
        })
    })

    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親にあるliタグを未完了リストから削除
        // closest()は該当のタグから一番近いタグを検索する。
        const deletTaarget = deleteButton.closest("li");
        document.getElementById("incompleteTodos").removeChild(deletTaarget)

    })

    li.innerText = inputTodo.value
    incompleteTodos.appendChild(li)
    li.appendChild(completeButton)
    li.appendChild(deleteButton)
}