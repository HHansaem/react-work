import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import Main from './component/Main';
import BoardList from './component/BoardList';
import BoardWrite from './component/BoardWrite';
import BoardDetail from './component/BoardDetail';

function App() {
  return (
    <div>
      <Main />
      <Routes>
        <Route exect path="/" element={<BoardList/>} />
        <Route exect path="/boardWrite" element={<BoardWrite/>} />
        {/* 여기서 :는 파라미터를 의미함 */}
        <Route exect path="/boardDetail/:num" element={<BoardDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
