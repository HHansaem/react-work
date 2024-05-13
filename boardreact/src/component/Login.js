import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Label, Input, Table } from 'reactstrap';
import { url } from '../config';
import { useDispatch } from 'react-redux';

const Login = () => {
    const divStyle = {margin:"0 auto", padding:'20px', width: '400px', border:'1px solid lightgray', borderRadius: '10px'};
    const [member, setMember] = useState({id:'', password:''});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeValue = (e) => {
        setMember({...member, [e.target.name]:e.target.value});
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post(`${url}/login`, member) 
            .then(res=> {
                dispatch({type:'user', payload:res.data});
                navigate("/");
            })
            .catch(err=> {
                console.log(err);
            })
    }

    return (
        <>
            <div className='header-text'>로그인</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for='id'>아이디</Label></td>
                            <td><Input type='text' name='id' id='id' onChange={changeValue}/></td>
                        </tr>
                        <tr>
                            <td><Label for='password'>비밀번호</Label></td>
                            <td><Input type='password' name='password' id='password' onChange={changeValue}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Button color='primary' style={{width:'100%'}} onClick={submit}>로그인</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Login;