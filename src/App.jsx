import './App.css'
import Greeting from './components/Greeting.jsx'
import SingleCat from './components/SingleCat.jsx'
import cats from './components/BigCats.jsx'
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
      <div>
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </div>
    </>
  )
}

export default App
