import {useState} from 'react';

const User = () => {
    const [user, setUser] = useState({id:'', tel:'', email:'', address:''});

    const changeValue = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    }

    const submit = (e) => {
        console.log(user);
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

export default User;