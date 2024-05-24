import { useState, useEffect } from 'react';
import axios from 'axios';
import { Label, Input, Table } from 'reactstrap';
import { tokenAtom } from './atoms';
import {useAtom} from 'jotai';
import {useNavigate} from 'react-router-dom';

const User = () => {
    const divStyle = {margin:"0 auto", padding:'20px', width: '400px', border:'1px solid lightgray', borderRadius: '10px'};
    const [member, setMember] = useState({id:'', username:'', password:'', email:''});
    const [token, setToken] = useAtom(tokenAtom);
    const navigate = useNavigate();

    const changeValue = (e) => {
        setMember({...member, [e.target.name]:e.target.value});
    }

    useEffect(() => {
        console.log(token);
        axios.get(`http://localhost:8090/user`, 
                {
                    headers:{Authorization:JSON.stringify(token)}
                }
            )
            .then(res=> {
                console.log(res);
                if(res.headers.Authorization != null) {  //토큰 만료되어 다시 받음
                    setToken(JSON.parse(res.headers.Authorization));
                    navigate("/user");
                } else {  //데이터 받음
                    setMember({...res.data});
                }
            })
            .catch(err=> {
                console.log(err);
            })
    },[])

    return (
        <>
            <div className='header-text'>회원정보</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for='id'>아이디</Label></td>
                            <td><Input type='text' name='id' id='id' disabled value={member.id}/></td>
                        </tr>
                        <tr>
                            <td><Label for='name'>이름</Label></td>
                            <td><Input type='text' name='name' id='name' disabled value={member.username}/></td>
                        </tr>
                        <tr>
                            <td><Label for='email'>이메일</Label></td>
                            <td><Input type='text' name='email' id='email' disabled value={member.email}/></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default User;