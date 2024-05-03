import logo from './logo.svg';
import './App.css';
import PropTest from './PropTest';
import Person from './Person';

function App() {
  let perInfo = {name:'song', age:30, nick:'송송이'};
  return (  //자바스크립트에 있는 값은 {}씀 (문자열이면 생략 가능)
    <div>
      <PropTest name='hong' age={30} />
      <Person person={perInfo} />
    </div>
  );
}

export default App;
