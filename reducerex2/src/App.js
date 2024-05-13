import './App.css';
import MyNickname from './MyNickname';
import { initState, reducer } from './MyReducer';
import {useReducer} from 'react';

function App() {

  const [info, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App">
      <label>{info.id}</label>&nbsp;&nbsp;&nbsp;
      <input type='text' onChange={(e)=>dispatch({type:'ID', payload:e.target.value})}/>
      <br/>
      <MyNickname info={info} dispatch={dispatch}/>
      <br/>
      <label>{info.grade}</label>&nbsp;&nbsp;&nbsp;
      <input type='text' onChange={(e)=>dispatch({type:'GRADE', payload:e.target.value})}/>
    </div>
  );
}

export default App;
