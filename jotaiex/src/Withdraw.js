import { useAtom } from "jotai";
import { accAtom } from "./atoms";
import { useState } from "react";

const Withdraw = () => {

    const [money, setMoney] = useState(0);
    const [acc, setAcc] = useAtom(accAtom);

    return(
        <tr>
            <td>출금</td>
            <td>
                <input type="text" onChange={(e)=>setMoney(+e.target.value)}/>
                <button onClick={()=>setAcc({...acc, balance:acc.balance-money})}>출금</button>
            </td>
        </tr>
    )
}

export default Withdraw;