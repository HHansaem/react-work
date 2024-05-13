import {useSelector, useDispatch} from 'react-redux';

const Page1 = () => {
    const data1 = useSelector(state=>state.data1);
    const dispatch = useDispatch();

    return(
        <>
            <h1>{data1}</h1>
            <input type='text' onChange={(e)=>dispatch({type:'STRING', data:e.target.value})}/>
        </>
    )
}

export default Page1;