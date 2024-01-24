import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
import { MyComponent } from './components/Greet'
import Welcome from './components/Welcome.js'
import Hello from './components/Hello.js'

function App() {
  return (
    <div className="App">
      <MyComponent name="ram" />
      <MyComponent name="sam" />
      <MyComponent name="hari" />
      <MyComponent name="dum" />
      <Welcome />
      <Hello name="kalay" />

    </div>
  );
}

export default App;
