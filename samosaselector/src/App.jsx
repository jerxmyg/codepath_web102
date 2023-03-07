import './App.css';
import samosa from "./assets/My project-1.png";
const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1> Samosa Selector </h1>
        <h2> Count: </h2>
        <img className="samosa" src={samosa} />
      </div>

    </div>
  )
}

export default App