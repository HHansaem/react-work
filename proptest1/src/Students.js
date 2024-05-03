import Student from "./Student";

function Students(props) {
    let pers = [...props.pers];
    return(
        <>
            <table border="1">
                <tr>
                    <th>이름</th><th>학년</th><th>학과</th>
                </tr>
                <tbody>
                    {pers.map((per, index)=> {
                        return(<Student key={index} per={per} />)
                        // return(  이렇게 쓴 거랑 같은 의미
                        //     <tr>
                        //         <td>{per.name}</td>
                        //         <td>{per.grade}</td>
                        //         <td>{per.subject}</td>
                        //     </tr>
                        // )
                    })}
                </tbody>
            </table>
        </>
    )  //pers배열에 있는 객체들을 하나씩 꺼낸 거
}

export default Students;