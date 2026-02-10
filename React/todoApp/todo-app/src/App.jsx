
import { useState } from 'react'
import './App.css'

function App() {
  const [Text, setText] = useState("")
  const [time, setTime] = useState("")
  const [studyRecords, setStudyRecords] = useState([

  ])

  const onChangeInput = (e) => {
    setText(e.target.value)
  }
  const onChangetime = (e) => {
    setTime(e.target.value)
  }

  const Registration = () => {
    setText("")
    setTime("")
    const newArr = [...studyRecords, { title: Text, time }]
    setStudyRecords(newArr);

  }
  const totalTime = studyRecords.reduce((sum, record) => {
    return sum + Number(record.time)
  }, 0)


  return (
    <>
      <div className="group">
        <div className='inputStudyContents'>
          <ul>
            <li>学習内容：<input type="text" value={Text} onChange={onChangeInput} /></li>
            <li>学習時間：<input type="number" value={time} onChange={onChangetime} />時間</li>
          </ul>
        </div>
      </div>

      <div className='studyRecordsArea'>
        <div className=''>
          <ul>
            <li>入力されている学習内容：{Text}</li>
            <li>入力されている学習時間：{time}</li>
          </ul>
        </div>
        <button onClick={Registration}>登録</button>
        {Text == "" && time == "" && <p>入力されていない項目があります。</p>}

      </div>

      <div className='totalStudyTime'>
        <p>合計時間:{totalTime}/1000(h)</p>
      </div>

    </>
  )
}

export default App
