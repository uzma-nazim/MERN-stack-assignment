import { Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap'
import Button from '@mui/material/Button';

import style from "../styles/signup.module.css"
import AppButtons from './button'
import { useDispatch, useSelector } from "react-redux";
import Signupaction from '../store/action/action'


function Login() {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    const dispatch = useDispatch();

    const login = () => {
        const userOBj = {

            email,

            password
        }


    }


    return (
        <>
            <div className={style.maincontainer}>
                <div className={style.miniContainer}>
                    <div className={style.heading}>

                        <h1>Login</h1>
                    </div>
                    <br />
                    <div className={style.todocontainer}>
                        {/* <Grid> */}


                            <br />
                            <Grid >
                                <TextField id="outlined-basic" value={email} onChange={(e) => setemail(e.target.value)} label="Enter Email" variant="outlined" fullWidth />

                            </Grid>
                            <br />


                            <Grid >
                                <TextField id="outlined-basic" value={password} onChange={(e) => setpassword(e.target.value)} label="Enter Password" variant="outlined" fullWidth />

                            </Grid>
                            <br />

                            <Grid>
                                <Button style={{ width: "100%" }} onClick={login} variant="contained">Login</Button>
                            </Grid>




                        {/* </Grid> */}





                    </div>
                    <br />
                    <br />



                </div>
            </div>
        </>
    )
}

export default Login