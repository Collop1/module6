import './App.css'
import Greeting from './components/Greeting.jsx'
import SingleCat from './components/SingleCat.jsx'
import cats from './components/BigCats.jsx'

function App() {

  return (
    <>
      <Greeting />
      <br />
      <Greeting name="John"><br /> Welcome to our website!</Greeting>
      <br />
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
