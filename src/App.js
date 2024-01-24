import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
import { MyComponent } from './components/Greet'
import Welcome from './components/Welcome.js'
import Hello from './components/Hello.js'

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Welcome />
      <Hello />

    </div>
  );
}

export default App;
