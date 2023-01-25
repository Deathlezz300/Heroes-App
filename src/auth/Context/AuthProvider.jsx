import React from 'react'
import { AuthContext } from './AuthContexto'
import { useReducer } from 'react'
import { AuthReducer } from './authReducer'
import { types } from '../Types/type'

const initalState=()=>{
    const user=JSON.parse(localStorage.getItem('user'));
    return{
        logged:!!user,
        user:user?.user
    }
}


export const AuthProvider = ({children}) => {
  
    const [user, dispatch] = useReducer(AuthReducer,{},initalState);

    const login=(name='')=>{

        const user1={
            logged:true,
            user:name
        }

        const action={
            type:types.login,
            payload:user1
        }
        
        localStorage.setItem('user',JSON.stringify(user1));
        dispatch(action);
    }


    const logout=()=>{
        const action={
            type:types.logout,
        }

        localStorage.removeItem('user');

        dispatch(action);
    }
  
    return (
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
