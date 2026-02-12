export const StudyRecordsArea = (props) => {

    const {text,time,Registration} = props
    

    
    return(
        <div className='studyRecordsArea'>
        <div className=''>
          <ul>
            <li>入力されている学習内容：{text}</li>
            <li>入力されている学習時間：{time}</li>
          </ul>
        </div>
        <button onClick={Registration}>登録</button>
        {text == "" && time == "" && <p>入力されていない項目があります。</p>}

      </div>
    )


}

