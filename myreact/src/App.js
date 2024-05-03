import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import YourComponent from './YourComponent';

function App() {
  return (  //return되는 것은 하나로 묶여 있어야 함 
    <div> 
      <h1>Hello React!!</h1>
      <MyComponent />
      <YourComponent />
    </div>
  );
}

export default App;
