import './App.css';
import {useState} from 'react';
import MyNumber from './MyNumber';

function App() {
  const [number, setNumber] = useState(10);
  const [str, setStr] = useState('stiven');
  const [obj, setObj] = useState({num:10, data:'stringdata'});
  const [arr, setArr] = useState([10,20,30]);

  return (
    <div className="App">
      <MyNumber param={number}/>
      {/* <MyStr param={str}/>
      <MyObj param={obj}/>
      <MyArr param={arr}/> */}
    </div>
  );
}

export default App;
