import { useState } from "react";
import axios from "axios";

const UserInfoForm = () => {
    const [name, setName] = useState({name:''});
    const [user, setUser] = useState({name:'', tel:'', email:'', address:''});

    const submit = (e) => {
        axios.get(`http://localhost:8090/getUser1/${name}`)
            .then(res=> {
                console.log(res.data);
            })
            .catch(err=> {
                console.log(err);
            })
    }

    return(
        <table border="1">
            <tbody>
                <tr>
                    <td>이름</td>
                    <td>
                        <input type="text" onChange={(e)=>setName(e.target.value)}/>
                        <button onClick={submit}>조회</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserInfoForm;