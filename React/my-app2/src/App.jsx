import { useState } from 'react'
import './App.css'
import { InputTodo } from './components/inputoTodo'
import { IncompleteTodos } from './components/incompleteTodos'
import { CompleteTodos } from './components/completeTodos'

function Todo() {
   const [todoText,setTodoText] =useState("")

  const [incompleteTodos,setIncompletTods] =useState([])
  
  const [completeTodos,setcompletTods] =useState([])
  
  const onChangeTodoText = (event) => setTodoText(event.target.value)
   
  // 未完了のTodoに追加
 
  const onClickAdd = () => {
    if(todoText === "" )return
    const newTodos =[...incompleteTodos,todoText];
    setIncompletTods(newTodos);
    setTodoText("")
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
    <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5}/>
    {incompleteTodos.length >= 5 && (<p>5個以上は登録できないよ</p>) }
    
    <IncompleteTodos incompleteTodos={incompleteTodos} onClick={completeButton} onClicks={deleteButton}/>
     
    <CompleteTodos completeTodos={completeTodos} returnButton={returnButton}/>
      
    </>
  )
}

export default Todo
