import {useState} from 'react';

export default function FPersonInfo2() {
    const [person, setPerson] = useState({name:'hong', age:20, height:173.5, weight:65});

    //onChange={(e)=>setPerson({...person, name:e.target.value})}
    // : person에 있는 모든 데이터 복제해서 그대로 두고 name만 바꿔주는 것
    const chageValue = (e) => {
        setPerson({...person, [e.target.name]:e.target.value})
    }
    
    return(
    <>
            <table>
                <tr>
                    <td><label>이름</label></td>
                    <td><input type='text' name='name' onChange={chageValue}/></td>
                </tr>
                <tr>
                    <td><label>나이</label></td>
                    <td><input type='text' name='age' onChange={chageValue}/></td>
                </tr>
                <tr>
                    <td><label>키</label></td>
                    <td><input type='text' name='height' onChange={chageValue}/></td>
                </tr>
                <tr>
                    <td><label>몸무게</label></td>
                    <td><input type='text' name='weight' onChange={chageValue}/></td>
                </tr>
            </table>
            <h1>{`이름:${person.name}, 나이${person.age}, 키:${person.height}, 몸무게:${person.weight}`}</h1>
        </>
    )
}