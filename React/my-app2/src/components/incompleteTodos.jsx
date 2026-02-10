export const IncompleteTodos = (props) =>{

    const {incompleteTodos,onClick,onClicks} = props


    
    return(
         <div className='incompleteTodos'>
        <p className='title'>未完了のTODO</p>
      
        <ul>
          {incompleteTodos.map((todo,index)=>{
            return(
            <li>
            <div className='TodoList'>
              <p className='todoItem'>{todo}</p>
              <button onClick={()=>onClick(index)}>完了</button>
              <button onClick={()=>onClicks(index)}>削除</button>
            </div>
          </li>)
          })}
        </ul>
      </div>
    )
}



