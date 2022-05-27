
import BASE_URI from "../../../core"
import axios from "axios"
import ActionType from "../contant"

const Signupaction = (data) => {
    
    return ((dispatch) => {
        dispatch({
            type: ActionType.USER_SIGNUP_REQ

        })
        
        
        axios.post(`${BASE_URI}signup`, data)
            .then((response) => {
        console.log(response    );
                if (response.data.error) {
                    dispatch({
                        type: ActionType.USER_SIGNUP_ERROR,
                        payload: response.data.error

                    })
                }
                else {
                    dispatch({
                        type: ActionType.USER_SIGNUP_SUCCESS,
                        payload: response.data
                    })
                }
            })
            .catch((error) => {
                dispatch({
                    type: ActionType.USER_SIGNUP_ERROR,
                    // payload:response.data.error
                })

            })
    })

}


export default Signupaction  