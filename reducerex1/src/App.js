import './App.css';
import {useState, useReducer} from 'react';

// state : 공유하고자하는 데이터
// reducer : state를 업데이트하는 역할 즉, 함수이다.
// action : 업데이트하고자 하는 내용
// dispatch : state 업데이트를 위한 요구, reducer 함수 호출 (파라미터로 action을 가져감)

const reducer = (state, action) => {  //reducer가 return한 값이 state가 되는 것
  switch(action.type) {
    case 'deposit': return +state+(+action.data);
    case 'withdraw': return +state-action.data;
    default: return +state;
  }
}

function App() {
  const [money, setMoney] = useState(0);
  const [balance, dispatch] = useReducer(reducer, 0);  //reducer: reducer로 사용될 함수, 0: reducer의 초기 state값
  return (
    <div className="App">
      <h2>useReducer 은행</h2>
      <p>잔액 : {balance}</p>
      <input type='number' value={money} onInput={(e)=>setMoney(e.target.value)} step="1000"/>
      <button onClick={()=>dispatch({type:'deposit', data:money})}>입금</button>
      <button onClick={()=>dispatch({type:'withdraw', data:money})}>출금</button>
    </div>
  );
}

export default App;
