import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import UserInfo from './UserInfo';
import SearchUser from './SearchUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SearchUser/>}/>
        <Route exact path="/userInfo" element={<UserInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
