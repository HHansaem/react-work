export const initState = {
    user: {id:'', password:'', name:'', email:'', address:''}
}

const reducer = (state=initState, action) => {
    const newState = {...state};
    switch(action.type) {
        case 'user': newState.user = action.payload; break;
        default:
    }
    return newState;
}

export default reducer;