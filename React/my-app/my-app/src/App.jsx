import { useState } from 'react'
import './App.css'

function Todo() {
  // todo は増えたり減ったりするので、ステートで管理する
  const [inCompletTodos, setinCompletTodos] = useState(["todoです1", "todoです2"])



  return (
    <>
      <div className='inputArea'>
        <input className='inputTodo' placeholder='todoを入力' />
        <button>追加</button>
      </div>

      <div className='incompleteTodos'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {inCompletTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className='TodoList'>
                  <p className='todoItem'>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
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
