import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './component/Header';
import Main from './component/Main';
import {Routes, Route} from 'react-router-dom';
import { MakeAccount } from './component/MakeAccount';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exect path="/" element={<Main/>}/>
        <Route exect path="/makeAccount" element={<MakeAccount/>}/>
      </Routes>
    </div>
  );
}

export default App;
