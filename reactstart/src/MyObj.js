import { useState } from "react";

function MyObj({param, setParam}) {
    const [datas, setDatas] = useState();
    const changeValue = (e) => {
        setDatas({...param, [e.target.name]:e.target.value});
    }

    return(
        <div>
            <h2>
                {param.num}&nbsp;
                <input type="text" name="num" onChange={changeValue}/>
                <button onClick={(e)=>setParam({...param, num:datas.num})}>변경</button>
            </h2>
            <h2>
                {param.data}&nbsp;
                <input type="text" name="data" onChange={changeValue}/>
                <button onClick={(e)=>setParam({...param, data:datas.data})}>변경</button>
            </h2>
        </div>
    )
}

export default MyObj;