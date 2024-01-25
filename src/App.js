import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
import { MyComponent } from './components/Greet'
import Welcome from './components/Welcome.js'
import Hello from './components/Hello.js'
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <MyComponent name="ram" /> */}
      {/* <MyComponent name="sam" /> */}
      {/* <MyComponent name="hari" /> */}
      {/* <MyComponent name="dum" >this is the children prop</MyComponent> */}
      {/* <Welcome name="hello" alias="world" /> */}
      {/* <Hello name="kalay" alias="goray" /> */}
      <Message />

    </div>
  );
}

export default App;
