import {useState, useEffect} from 'react';  
//전체 계좌 목록은 화면이 요청되자마자 백앤드에 요청해서 가져와야 함

export default function AllAccountInfo() {
    const [accs, setAccs] = useState([]);

    //useEffect: 화면이 뜨자마자 가장 먼저 호출되는 함수
    useEffect(()=> {
        let raccs = [{id:'1001', name:'홍길동', balance:100000, type:'normal', grade:''},
                {id:'1002', name:'김길동', balance:200000, type:'special', grade:'VIP'},
                {id:'1003', name:'고길동', balance:300000, type:'special', grade:'Gold'},
                {id:'1004', name:'하길동', balance:400000, type:'normal', grade:''},
                {id:'1005', name:'창길동', balance:500000, type:'special', grade:'Silver'}
            ]
        
        setAccs([...raccs]);
    },[])
    return(
        <>
            <h3>전체계좌조회</h3>
            <table border="1">
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
            </table>
        </>
    )
}