import {combineReducers} from 'redux';
import { addsubReducer } from './reducer/addsub';
import { countingReducer } from './reducer/counting';

//store는 하나만 써야하기 때문에 reducer를 하나로 합쳐서 store해주는 거
export const rootReducer = combineReducers({  //두개이상의 reducer을 합쳐서 하나의 변수에 담기
    value:addsubReducer,
    count:countingReducer
})