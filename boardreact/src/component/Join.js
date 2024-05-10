import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Label, Input, Table } from 'reactstrap';
import { url } from '../config';

const Join = () => {
    const divStyle = {margin:"0 auto", padding:'20px', width: '400px', border:'1px solid lightgray', borderRadius: '10px'};
    const [member, setMember] = useState({id:'', name:'', password:'', email:'', address:''});
    const navigate = useNavigate();

    const changeValue = (e) => {
        setMember({...member, [e.target.name]:e.target.value});
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post(`${url}/join`, member)
            .then(res=> {
                navigate("/login");
            })
            .catch(err=> {
                console.log(err);
            })
    }

    return (
        <>
            <div className='header-text'>회원가입</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for='id'>아이디</Label></td>
                            <td><Input type='text' name='id' id='id' onChange={changeValue}/></td>
                        </tr>
                        <tr>
                            <td><Label for='name'>이름</Label></td>
                            <td><Input type='text' name='name' id='name' onChange={changeValue}/></td>
                        </tr>
                        <tr>
                            <td><Label for='password'>비밀번호</Label></td>
                            <td><Input type='password' name='password' id='password' onChange={changeValue}/></td>
                        </tr>
                        <tr>
                            <td><Label for='email'>이메일</Label></td>
                            <td><Input type='text' name='email' id='email' onChange={changeValue}/></td>
                        </tr>
                        <tr>
                            <td><Label for='address'>주소</Label></td>
                            <td><Input type='text' name='address' id='address' onChange={changeValue}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Button color='primary' style={{width:'100%'}} onClick={submit}>회원가입</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Join;