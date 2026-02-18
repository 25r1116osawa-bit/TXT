// App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/Searchinput/SearchInput';
import styled from 'styled-components';

import "./styles.css"
import { UserCard } from './components/Organisums/users/UserCard';
import { DefaultLayout } from './components/template/DefaultLayout';

const users = [...Array(10).keys()].map((val)=>{
return {
  id:val,
  name:`tatsuki-${val}`,
  image: "https://images.unsplash.com/photo-1768127502130-bca3e208eba6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  email:"1234@gmail.com",
  phone: "090-1234-5678",
  company:{
    name:"テスト株式会社"
  },
  website:"http://google.com"
}
})



export default function App() {
  return (
    <BrowserRouter>
    <DefaultLayout>
        {/* Routes の外なら自由にコンポーネントを置ける */}
       <PrimaryButton>送信</PrimaryButton>
       <SecondaryButton>検索</SecondaryButton>
       <br />
       <SearchInput/>
       <SUserArea>
      {users.map((user)=>(
        <UserCard key ={user.id} user={user}/>
      )
      )}
      </SUserArea>
   </DefaultLayout>
   </BrowserRouter>
  );
}

const SUserArea = styled.div`
  padding-top:40px;
  width:100%;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  grid-gap:20px;
`