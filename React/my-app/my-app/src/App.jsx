import { useState } from 'react'
import './App.css'

function Todo() {
   const [todoText,setTodoText] =useState("")

  const [incompleteTodos,setIncompletTods] =useState([])
  
  const [completeTodos,setcompletTods] =useState([])
  
  const onChangeTodoText = (event) => setTodoText(event.target.value)
   
  // 未完了のTodoに追加
  const onClikAdd = () => {
    if(todoText === "") return;
    const addToDoText = [...incompleteTodos,todoText];
    setIncompletTods(addToDoText);
    setTodoText("");
  }

  // 削除ボタンの作成
  const deleteButton = (index) =>{
    const newTodos = [...incompleteTodos]
    newTodos.splice(index,1)
    setIncompletTods(newTodos)
  }
// 完了のTodoに追加
  const completeButton = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index,1)
    setIncompletTods(newTodos)

    const addCompleteTodo = [...completeTodos,incompleteTodos[index]]
    setcompletTods(addCompleteTodo)
  }

  // 戻すボタンの追加
  const returnButton = (index) =>{
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index,1)
    console.log(newCompleteTodos);
    setcompletTods(newCompleteTodos)

    const addCompleteTodos =[...incompleteTodos ,completeTodos[index]]
    setIncompletTods(addCompleteTodos)
  }
  

  return (
    <>
      <div className='inputArea'>
        <input className='inputTodo' placeholder='todoを入力' value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClikAdd}>追加</button>
      </div>

      <div className='incompleteTodos'>
        <p className='title'>未完了のTODO</p>
      
        <ul>
          {incompleteTodos.map((todo,index)=>{
            return(
            <li>
            <div className='TodoList'>
              <p className='todoItem'>{todo}</p>
              <button onClick={()=>completeButton(index)}>完了</button>
              <button onClick={()=>deleteButton(index)}>削除</button>
            </div>
          </li>)
          })}
        </ul>
      </div>
      <div className='completeTodos'>
        <p className='title'>todoでした</p>
        <ul>       
         { completeTodos.map((todo,index)=>{
          return(<li>
            <div className='TodoList'>
              <p className='todoItem'>{todo}</p>
              <button onClick={()=>returnButton(index)}>戻す</button>
            </div>
          </li>)
         })}
        </ul>
      </div>
    </>
  )
}

export default Todo
