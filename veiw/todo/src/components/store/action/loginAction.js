
import axios from "axios"

import BASE_URI from "../../../core"
import ActionType from "../contant"


const loginAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: ActionType.USER_LOGIN_REQ
        })

        axios.post(`${BASE_URI}login` ,data)
            .then((res) => {

                const {data} = res 
                console.log(data);
            

                if (res.data.err) {
                    dispatch({
                        type: ActionType.USER_LOGIN_ERROR,
                        payload: data
                    })
                }
                else {
                        localStorage.setItem("user" ,JSON.stringify(data.data))

                    dispatch({
                        type: ActionType.USER_LOGIN_SUCCESS,
                        payload: data
                    })
                }

            })
            .catch((error) => {
                dispatch({
                    type: ActionType.USER_LOGIN_ERROR,
                    payload: error
                })

            })

    }

}

export default loginAction