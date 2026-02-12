
import { useState } from 'react'
import './App.css'
import { InputStudyContents } from './components/InputStudyContents'
import { StudyRecordsArea } from './components/studyRecordsArea'

function App() {
  const [text, setText] = useState("")
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
    const newArr = [...studyRecords, { text, time }]
    setStudyRecords(newArr);

  }
  const totalTime = studyRecords.reduce((sum, record) => {
    return sum + Number(record.time)
  }, 0)


  return (
    <>
      <InputStudyContents 
      value={text} 
      values={time}
      onChangeText={onChangeInput}
      onChangetime={onChangetime}
      />

      <StudyRecordsArea 
      text={text}
      time={time}
      Registration={Registration}
      />
      

      <div className='totalStudyTime'>
        <p>合計時間:{totalTime}/1000(h)</p>
      </div>

    </>
  )
}

export default App
