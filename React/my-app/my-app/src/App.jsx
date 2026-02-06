import { useState } from 'react'
import './App.css'

function Todo() {
  // todo は増えたり減ったりするので、ステートで管理する
  const [inCompletTodos, setinCompletTodos] = useState([
    {id:1,text:"todoです1"}, 
    {id:2,text:"todoです2"}])
   
  const [inputText,setInputText] = useState("")

 const onChangeInput = (e) => {
  setInputText(e.target.value)
}

  // 追加ボタンを押した後の処理
  const changeCompleteTodos = () => {
  const newTodo = {
    id: Date.now(),
    text: inputText
  }
  setinCompletTodos([...inCompletTodos, newTodo])
  setInputText("")
}

  // 削除ボタンを押した後の処理
 const deleteItem = (id) => {
  const newTodos = inCompletTodos.filter(todo => todo.id !== id)
  setinCompletTodos(newTodos)
}

  return (
    <>
      <div className='inputArea'>
        <input className='inputTodo' placeholder='todoを入力' value={inputText} onChange={onChangeInput} />
        <button onClick={changeCompleteTodos}>追加</button>
      </div>

      <div className='incompleteTodos'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {inCompletTodos.map((todo) => {
            return (
              <li key={todo.id}>
                <div className='TodoList'>
                  <p className='todoItem'>{todo.text}</p>
                  <button>完了</button>
                  <button onClick={()=>deleteItem(todo.id)}>削除</button>
                </div>
              </li>)

          })}


        </ul>

      </div>
      <div className='completeTodos'>
        <p className='title'>todoでした</p>
        <ul>
          <li>
            <div className='TodoList'>
              <p className='todoItem'>todo</p>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div className='TodoList'>
              <p className='todoItem'>todo</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>

      </div>
    </>
  )
}

export default Todo
