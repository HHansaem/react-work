import './App.css';
import User from './User';
import UserInfo from './UserInfo';
import UserInfoForm from './UserInfoForm';
import UserModify from './UserModify';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      //Routes 안에 있는 거 : 전체 화면 갱신
      <Routes>
        <Route exact path="/" element={<User />} />
        <Route exact path="/userInfo" element={<UserInfo />} />
        <Route exact path="/userInfo/:puser" element={<UserInfo />} />
        <Route exact path="/userModify" element={<UserModify />} />
        <Route exact path="/userInfoForm" element={<UserInfoForm />} />
      </Routes>
  );
}

export default App;
