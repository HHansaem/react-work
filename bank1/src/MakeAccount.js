import {useState} from 'react';

export const MakeAccount = () => {
    const [acc, setAcc] = useState({id:'', name:'', money:'', type:'normal', grade:''});
    const changeValue = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value})
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(acc);  //JSON.stringify(acc)는 문자열로 넘기는 것
    }

    return(
        <>
            <h3>계좌개설</h3>
            <table border="1">
                <tbody>
                    <tr>
                        <th>계좌번호</th>
                        <td><input type="text" name="id" onChange={changeValue}/></td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td><input type="text" name="name" onChange={changeValue}/></td>
                    </tr>
                    <tr>
                        <th>입금액</th>
                        <td><input type="text" name="money" onChange={changeValue}/></td>
                    </tr>
                    <tr>
                        <th>종류</th>
                        <td>
                            <input type="radio" name="type" value="normal" onChange={changeValue} checked={acc.type=='normal'}/>일반
                            <input type="radio" name="type" value="special" onChange={changeValue}/>특수
                        </td>
                    </tr>
                    <tr>
                        <th>등급</th>
                        <td>
                            <select name="grade" onChange={changeValue} disabled={acc.type=='normal'}>
                                <option value="">선택하세요</option>
                                <option value="vip">VIP</option>
                                <option value="gold">Gold</option>
                                <option value="silver">Silver</option>
                                <option value="normal">Normal</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="개설" onClick={submit}/></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}