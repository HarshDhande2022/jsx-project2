import img from './images/airbimg.png';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Evolution of </h1>
         <h1> Airbnb's Frontend</h1>
        <p>@spikebrehm</p>
        <img src={img} alt="Inc.logo" style={{ height: "40px" }} />
      </header>
    </div>
  );
}

export default App;
