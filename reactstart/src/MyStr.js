import { useState } from "react";

function MyStr({param, setParam}) {
    const [data, setData] = useState();

    return(
        <div>
            <h1>{param}</h1>
            <input type="text" onChange={(e)=>setData(e.target.value)}/>
            <button onClick={()=>setParam(data)}>변경</button>
        </div>
    )
}

export default MyStr;