import {atomWithStorage, createJSONStorage} from 'jotai/utils';

export const initUser = {id:'', name:'', password:'', email:'', address:''};

export const userAtom = atomWithStorage(
    'user',
    initUser,
    createJSONStorage(() => sessionStorage)
);

export const tokenAtom = atomWithStorage(
    'token',
    '',
    createJSONStorage(() => sessionStorage)
);