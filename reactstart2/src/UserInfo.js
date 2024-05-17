import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const UserInfo = () => {
    const [user, setUser] = useState({name:'', tel:'', email:'', address:''});
    const {puser} = useParams();

    useEffect(()=> {
        let ouser = JSON.parse(puser);
        if(puser == null) {
            axios.get("http://localhost:8090/userInfo")
                .then(res=> {
                    setUser({...res.data});
                })
                .catch(err=> {
                    console.log(err);
                })
        } else {
            setUser({...ouser});
        }
    }, [])

    return(
        <div>                                                                                                                                                                                                                                                                                                                                          
            <table border="1">
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td>{user.tel}</td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>{user.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserInfo;