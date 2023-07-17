import logo from './logo.svg';
import './App.css';

function App() {
  const name="Sjohn";
  const a=1;
  const b=2;
  const message=()=>{
    return "Good Morning";
  }
  return (

    <div className="App">
        <h1>my name is {name}</h1>
      <h1>Hello world</h1>
      <h2>{message()}</h2>

    </div>
  );
}

export default App;
