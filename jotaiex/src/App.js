import './App.css';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';  
import Account from './Account';
import { countAtom } from './atoms'; 

function App() {
  //useState는 이 component영역 안에서만 선언 가능, useAtom은 안에서도 밖에서도 선언 가능
  const [count, setCount] = useAtom(countAtom);  //data랑 setter함수 가져오기
  const countValue = useAtomValue(countAtom);  //data만 가져오기
  const updateCount = useSetAtom(countAtom);  //setter함수만 가져오기

  return (
    <div className="App">
      {count}<br/>
      <Account />
    </div>
  );
}

export default App;
