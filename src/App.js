import logo from './logo.svg';
import './App.css';

import AComp from './components/AComp';
import {BComp} from './components/BComp';


function App() {
  return (
    <div className="App">
      <AComp surname='tanwar'/>
      <AComp surname='tanwar'/>
      <BComp surname='TANWAR'/>
    </div>
  );
}

export default App;
