import logo from './logo.svg';
import './App.css';
import PropTest from './PropTest';

function App() {
  return (  //자바스크립트에 있는 값은 {}씀 (문자열이면 생략 가능)
    <div>
      <PropTest name='hong' age={30} />
    </div>
  );
}

export default App;
