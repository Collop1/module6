import './App.css'
import Greeting from './components/Greeting.jsx'
import { EditedCats } from './components/BigCats.jsx'
import MoodChanger from './components/Emoji.jsx'

function App() {
  return (
    <>
      <h1><Greeting /></h1>
      <br />
      <Greeting name="John"><br /> Welcome to our website!</Greeting>
      <h2>Mood changer</h2>
      <MoodChanger />
      <h2>Big Cats</h2>
      <EditedCats />
    </>
  )
}

export default App