import React, { createContext,useReducer } from "react";
import {reducer,initialState} from '../Actions/Authaction'

export const AuthContext = createContext()
 
const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
        return(
            <AuthContext.Provider
                value={{state,dispatch}}>
            {children}
            </AuthContext.Provider>
        )
}

export default AuthContextProvider