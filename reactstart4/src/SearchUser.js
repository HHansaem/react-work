import {useState} from 'react';
import axios from 'axios';
import { userAtom } from './atoms';
import { useSetAtom } from 'jotai/react';
// import { useAtom } from 'jotai/react';
import {useNavigate} from 'react-router-dom';

const SearchUser = () => {
    const [name, setName] = useState('');
    const setUser = useSetAtom(userAtom); //useSetAtom: 값만 가져옴
    // const [user, setUser] = userAtom(userAtom);  //useAtom : 값과 setter를 같이 가져옴
    const navigate = useNavigate();
    
    const submit = (e) => {
        axios.get(`http://localhost:8090/getUser1/${name}`)
            .then(res=> {
                setUser(res.data);
                navigate("/userInfo");
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
                    <td>이름</td>
                    <td>
                        <input type="text" onInput={(e)=>setName(e.target.value)}/>
                        <button onClick={submit}>검색</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default SearchUser;