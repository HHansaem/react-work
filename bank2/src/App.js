// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { MakeAccount } from './MakeAccount';
import AccountInfo from './AccountInfo';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllAccountInfo from './AllAccountInfo';
import Header from './header';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Join } from './Join';
import { Login } from './Login';

function App() {  //<Routes> 밖: 고정적인 거, <Routes>안의 <Route>: path에 따라 바뀌는 화면
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/makeAccount" element={<MakeAccount />}/>
        <Route exact path="/accountInfo" element={<AccountInfo />}/>
        <Route exact path="/deposit" element={<Deposit />}/>
        <Route exact path="/withdraw" element={<Withdraw />}/>
        <Route exact path="/allAccountInfo" element={<AllAccountInfo />}/>
        <Route exact path="/join" element={<Join />}/>
        <Route exact path="/" element={<Login />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
