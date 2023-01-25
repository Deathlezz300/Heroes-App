import { types } from "../Types/type"

export const AuthReducer=(state={},action)=>{

    switch(action.type){
        case types.login:
            return{
                ...state,
                logged:action.payload.logged,
                user:action.payload.user
            }
        
        case types.logout:
            return{
                ...state,
                logged:false
            }
        default:
            return state
    }


}