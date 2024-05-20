import {atomWithStorage, createJSONStorage} from 'jotai/utils';

//공유할 데이터를 각 함수에서 적어줌
export const tokenAtom = atomWithStorage(
    'token',
    '',
    createJSONStorage(()=>sessionStorage)
)

export const userAtom = atomWithStorage(
    'user',  //redux에서 action의 type에 해당하는 거
    {name:'', tel:'', email:'', address:''},
    createJSONStorage(()=>sessionStorage)
)