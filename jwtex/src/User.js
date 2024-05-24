import { useState, useEffect } from 'react';
import axios from 'axios';
import { Label, Input, Table } from 'reactstrap';
import { tokenAtom } from './atoms';
import {useAtomValue} from 'jotai';

const User = () => {
    const divStyle = {margin:"0 auto", padding:'20px', width: '400px', border:'1px solid lightgray', borderRadius: '10px'};
    const [member, setMember] = useState({id:'', username:'', password:'', email:''});
    const token = useAtomValue(tokenAtom);

    const changeValue = (e) => {
        setMember({...member, [e.target.name]:e.target.value});
    }

    useEffect(() => {
        axios.get(`http://localhost:8090/user`, 
            {
                headers:{Authorization:token.access_token}
            }
        )
            .then(res=> {
                console.log(res);
                setMember({...res.data});
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