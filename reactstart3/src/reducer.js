//state : 공유하고자 하는 데이터 (이 데이터를 바라보는 태그들은 자동으로 랜더링됨)
//reducer : state변수를 변경하는 함수
//action : state변수 가운데 특정 요소를 특정값으로 변경 지정
//dispatch : reducer를 action으로 호출
//selector : state변수 접근

export const initState = {  //공유하고자 하는 데이터 다 넣어줌
    token:'',
    user:{name:'', tel:'', email:'', address:''}
}

//reducer, reducer2 는 같은 코드
export const reducer = (state=initState, action) => {
    switch(action.type) {
        case 'TOKEN' : return {...state, token:action.payload};
        case 'USER' : return {...state, user:{...action.payload}};
        default: return state;
    }
}

// export const reducer2 = (state=initState, action) => {
//     let newState = {...state};
//     switch(action.type) {
//         case 'TOKEN' : newState.token = action.payload; break;
//         case 'USER' : newState.user = {...action.payload}; break;
//         default: break;
//     }
//     return newState;
// }