import ActionType from"../contant"


const INITIAL_STATE ={
    USER_DATA: undefined,
    USER_ERROR : "",
    USER_DATA_LOADING : false,
    USER_EMPTY_MSG: ""
    
}


const loginReducer = (state  = INITIAL_STATE , action )=>{
    switch(action.type){
        case ActionType.USER_LOGIN_REQ:
            return{
                ...state ,
                USER_DATA_LOADING :true
            }

            case ActionType.USER_LOGIN_SUCCESS:
                return{
                    ...state,
                    USER_DATA: action.payload.data,
                    USER_DATA_LOADING: false,
                    USER_EMPTY_MSG:action.payload.massage,
                    
                    
                    
                }
                case ActionType.USER_SIGNUP_ERROR:
                    
                    return{
                        ...state,
                    
                        USER_DATA_LOADING: false,
                        USER_ERROR:action.payload.data
                    }
                default:
                    return  state

                    
                    
                    
                }

    }


export default loginReducer