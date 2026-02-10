export const CompleteTodos = (props) => {

    const {completeTodos,returnButton} = props

return(
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
        )

      }
