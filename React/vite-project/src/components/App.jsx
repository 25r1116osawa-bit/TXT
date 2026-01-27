import './App.css'
import ColorfulMessage from './App.css'



const App = () => {


const ContentStyleB = {
    color: "red",
    fontsiza: "18px"
  }

  return (
    <>
      <ColorfulMessage color="blue" message="こんにちわ" />

      <p style={ContentStyleB}>元気です。</p>
      
    </>
  )
}

export default App
