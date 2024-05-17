import { useState } from "react";
import axios from 'axios';

const UserModify = () => {

    const [user, setUser] = useState({name:'', tel:'', email:'', address:''});

    const changeValue = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    }

    const submit = (e) => {
        let formData = new FormData();
        formData.append("name", user.name);
        formData.append("tel", user.tel);
        formData.append("email", user.email);
        formData.append("address", user.address);

        axios.post("http://localhost:8090/userModify1", formData)
            .then(res=> {
                alert(res.data);
            })
            .catch(err=> {
                console.log(err);
            })
    }

    return(
        <div>
            <table border="1">
                <tbody>
                    <tr>
                        <td><label for="name">이름</label></td>
                        <td><input type="text" id="name" name="name" onChange={changeValue}/></td>
                    </tr>
                    <tr>
                        <td><label for="tel">전화번호</label></td>
                        <td><input type="text" id="tel" name="tel" onChange={changeValue}/></td>
                    </tr>
                    <tr>
                        <td><label for="email">이메일</label></td>
                        <td><input type="text" id="email" name="email" onChange={changeValue}/></td>
                    </tr>
                    <tr>
                        <td><label for="address">주소</label></td>
                        <td><input type="text" id="address" name="address" onChange={changeValue}/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button onClick={submit}>전송</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserModify;