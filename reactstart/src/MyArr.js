import { useState } from "react";

const MyArr = ({param, setParam}) => {
    const [data, setData] = useState();
    
    const addData = () => {
        setParam([...param, data]);  //객체도, 배열도 새로 생성해서 넣어줘야 변경된 걸 인식함
    }

    const delData = (n) => {
        let tarr = [...param];
        let idx = tarr.indexOf(n);
        tarr.splice(idx,1);
        setParam([...tarr]);
    }

    const changeArr = (e, n) => {
        let value = e.target.parentElement.children[0].value;  //td의 0번째 자식인 input의 value
        let tarr = [...param];
        let idx = tarr.indexOf(n);
        tarr.splice(idx, 1, value);
        setParam([...tarr]);
    }

    return(
        <div>
            <table border="1">
                <tbody>
                    {
                        param.map((item, index)=>
                            <tr key={index}>
                                <td>{item}</td>
                                <td><button onClick={()=>delData(item)}>삭제</button></td>
                                <td>
                                    <input type="text" />
                                    <button onClick={(e)=>changeArr(e, item)}>변경</button>
                                </td>
                            </tr>)
                    }
            </tbody>
            </table>
            <input type="text" onChange={(e)=>setData(e.target.value)}/>
            <button onClick={addData}>추가</button>
        </div>
    )
}

export default MyArr;