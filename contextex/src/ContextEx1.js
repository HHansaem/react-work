import { useState, createContext } from "react";
import ContextEx2 from "./ContextEx2";
export const UserContext = createContext();

const ContextEx1 = () => {
    const [user, setUser] = useState("Jesse Hall");
    const context = {  //자식이랑 공유하고자 하는 데이터를 객체로 묶기
        user,  //key와 value가 같아서 한번만 써줌
        setUser:setUser.bind(this)  //화살표 함수에는 this가 없으니, setUser함수를 통해 this값을 공유함
    }

    return(
        //해당 태그 안에 있는 것과 context값을 공유
        <UserContext.Provider value={context}>
            <h1>{`Hello ${user}`}</h1>
            <ContextEx2 />
        </UserContext.Provider>
    )
}

export default ContextEx1;