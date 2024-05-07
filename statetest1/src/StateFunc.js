import { useState } from "react";

function StateFunc(props) {
    const [str, setStr] = useState(props.str);  //setStr: str값을 바꾸는 setter함수
    const [num, setNum] = useState(100);  //setNum: num값을 바꾸는 setter함수

    return(
        <>
            <div>
                {str}:{num}
            </div>
            <button onClick={()=>setNum(200)}>200</button>
            <button onClick={()=>setStr("React")}>React</button>
        </>
    )
}

export default StateFunc;