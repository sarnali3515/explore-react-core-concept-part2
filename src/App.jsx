import './App.css'
import Counter from './Counter'
import Friends2 from './Friends2'
import Team from './Team'
import Users from './user'


function App() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button clicked 2')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h3>React Core Concept 2</h3>
      <Friends2></Friends2>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('third clicked') }}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
