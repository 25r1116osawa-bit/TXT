export const InputStudyContents = (props) => {

    const {value,values,onChangeText,onChangetime} = props 
    
    return(
        <div className="group">
        <div className='inputStudyContents'>
          <ul>
            <li>学習内容：<input type="text" value={value} onChange={onChangeText}/></li>
            <li>学習時間：<input type="number" value={values} onChange={onChangetime}/>時間</li>
          </ul>
        </div>
      </div>
    )


}

