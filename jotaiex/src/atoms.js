import {atom} from 'jotai'; 

//useState랑 다르게 component영역 밖에서 선언 가능(export해주면 다른 js에서 import가능)
export const countAtom = atom(0);
export const accAtom = atom({id:'1001', name:'홍길동', balance:100000});