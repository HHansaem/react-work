const MyNickname = ({info, dispatch}) => {
    return(
        <>
            <label>{info.nickname}</label>&nbsp;&nbsp;&nbsp;
            <input type='text' onChange={(e)=>dispatch({type:'NICKNAME', payload:e.target.value})}/>
        </>
    )
}

export default MyNickname;