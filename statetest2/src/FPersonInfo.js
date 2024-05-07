import {useState} from 'react';  //useState: 상태 변수를 선언, 상태 변수 값 및 상태 업데이트

export default function FPersonInfo() {
    const [name, setName] = useState("hong");  //setName: name값을 바꾸는 setter함수
    const [age, setAge] = useState(20);
    const [height, setHeight] = useState(173.5);
    const [weight, setWeight] = useState(65);

    return(
        <>
            <table>
                <tr>
                    <td><label>이름</label></td>
                    <td><input type='text' name='name' onChange={(e)=>setName(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><label>나이</label></td>
                    <td><input type='text' name='age' onChange={(e)=>setAge(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><label>키</label></td>
                    <td><input type='text' name='height' onChange={(e)=>setHeight(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><label>몸무게</label></td>
                    <td><input type='text' name='weight' onChange={(e)=>setWeight(e.target.value)}/></td>
                </tr>
            </table>
            <h1>{`이름:${name}, 나이${age}, 키:${height}, 몸무게:${weight}`}</h1>
        </>
    )
}