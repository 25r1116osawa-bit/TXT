// App.tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/Searchinput/SearchInput';



function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />     
      </Routes>
        {/* Routes の外なら自由にコンポーネントを置ける */}
       <PrimaryButton>送信</PrimaryButton>
       <SecondaryButton>検索</SecondaryButton>
       <br />
       <SearchInput>テスト</SearchInput>
    </BrowserRouter>
  );
}
