// import logo from './logo.svg';
import './App.css';
import { SubComponent } from './SubComponent';
import { PropsNode } from './PropsNode';

function App() {
  return (
    <div>
      {
        // <SubComponent str="react" num={20} boolean={1==1} obj={{react:'리액트', exam:100}}
        // arr={[10,20,30]} func={console.log('I am Function')} />
      }
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}

export default App;
