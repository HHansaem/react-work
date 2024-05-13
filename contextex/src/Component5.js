import { useState } from "react";

const Component5 = ({user, setUser}) => {

    return(
        <>
            <h1>Component5</h1>
            <h2>{`Hello ${user} again`}</h2>
            <input type="text" onChange={(e)=>setUser(e.target.value)} />
        </>
    )
}

export default Component5;