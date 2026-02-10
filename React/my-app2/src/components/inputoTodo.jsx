export const InputTodo = (props) =>{

    const {todoText,onChange,onClick,disabled} = props


    
    return(
         <div className='inputArea'>
        <input disabled={disabled} className='inputTodo' placeholder='todoを入力' value={todoText} onChange={onChange}/>
        <button disabled={disabled} onClick={onClick}>追加</button>
      </div>
    )
}



