import { createContext } from 'react';


const initialState = {
    user:null
};
const userContext = createContext(initialState)

export default userContext;


