//전체 계좌 목록은 화면이 요청되자마자 백앤드에 요청해서 가져와야 함
import {useState, useEffect} from 'react';  
import axios from 'axios';
import { Table } from 'reactstrap';

export default function AllAccountInfo() {
    const [accs, setAccs] = useState([]);

    //useEffect: 화면이 뜨자마자 가장 먼저 호출되는 함수
    useEffect(()=> {
        axios.get(`http://localhost:8090/allAccountInfo`)
            .then(res=>{
                setAccs([...res.data]);
            })
    },[])
    return(
        <>
            <div className='route'>
                <h4>전체계좌조회</h4>
                <Table bordered style={{width:'800px', margin:'0 auto'}}>
                    <tbody>
                        <tr>
                            <th>계좌번호</th>
                            <th>이름</th>
                            <th>잔액</th>
                            <th>종류</th>
                            <th>등급</th>
                        </tr>
                        {accs.map(acc=>(
                            <tr key={acc.id}>
                                <td>{acc.id}</td>
                                <td>{acc.name}</td>
                                <td>{acc.balance}</td>
                                <td>{acc.type}</td>
                                <td>{acc.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}