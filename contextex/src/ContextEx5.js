import { useContext } from "react";  //공유할 때는 createContext, 공유 받을 때는 useContext
import { UserContext } from "./ContextEx1";

const ContextEx5 = () => {
    const context = useContext(UserContext);

    return(
        <> 
            <h1>ContextEx5</h1>
            <h2>{`Hello ${context.user} again`}</h2>
            <input type="text" onChange={(e)=>context.setUser(e.target.value)}/>
        </> 
    )
}

export default ContextEx5;