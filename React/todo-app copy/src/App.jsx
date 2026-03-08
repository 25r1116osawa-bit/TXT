import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css'

function App() {

  const [title, setTitle] = useState("")
  const [time, setTime] = useState(0)
  const [item, setItem] = useState([])


  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;


  const headers = {
    apikey: SUPABASE_KEY,
    Authorization:`Berarer  ${SUPABASE_KEY}`,
    "Content-Type":"application/json"
  }
  
  useEffect(() => {
    axios.get(`${SUPABASE_URL}/rest/v1/study-record`, 
      {headers},
    )
      .then((res) => {
        console.log(res.data);
        setItem(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [SUPABASE_URL, SUPABASE_KEY])


const handleAdd = async () => {
  const newData = await addStudyRecord(title, time);

  if (newData) {
    setItem((prev) => [...prev, ...newData]);
  }
};

  async function addStudyRecord(title, time) {
    try {
      const response = await axios.post(
        `${SUPABASE_URL}/rest/v1/study-record`,
        {
          title,
          time
        },
        {
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
        }
      );

      console.log("追加成功:", response.data);

      return response.data; // 追加したレコードが返る
    } catch (error) {
      console.error("追加エラー:", error);
    } finally {
      setTitle("");
      setTime(0);
      
    }

  }

  const onChangeInput = (e) => {
    setTitle(e.target.value)

  }
  const onChangetime = (e) => {
    setTime(Number(e.target.value))
  }

  return (
    <div>
      <div>
        <h1>学習記録</h1>

        <br />
      </div>

      <div>
        <ul>
          <Sli>
            <p>学習内容：</p>
            <input type="text" value={title} onChange={onChangeInput}></input>
          </Sli>
          <Sli>
            <p>学習時間：</p>
            <input type="Number" value={time} onChange={onChangetime}></input>
          </Sli>
        </ul>
        <Button onClick={handleAdd}>登録</Button>
      </div>
      {item.map((item,index) => {
        return(
        <div key={index}>
          <p>{`${index}.学習内容：${item.title}`}</p>
          <p>{`${index}.学習時間：${item.time}`}</p>
        </div>
      )})}

    </div>


  );
}

export default App;

const Button = styled.button`
  background-color: #6f6f84;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    background-color: darkblue;
  }
`;

const Sli = styled.li`
  display:flex;
  align-items:center;

`;
