import { Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FormControl } from 'react-bootstrap'
import style from "../styles/signup.module.css"
import AppButtons from './button'
import { useDispatch, useSelector } from "react-redux";

import Signupaction from '../store/action/action'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let [user_name, setusername] = useState("")
    let [contact, setconatct] = useState("")
    let [nav , setNav] = useState(false)
    let navigate = useNavigate()
  
    let {USER_DATA ,USER_EMPTY_MSG} = useSelector(state=> state.signupReducer)

    console.log(USER_EMPTY_MSG);
    const dispatch = useDispatch();
    
    const signup =  () => {
        setemail("")
        setNav(!nav)
        const userOBj = {
            
            user_name,
            email,
            contact,
            password
        }
        if(!user_name || !email || !contact || !password){
            

            toast.error('REQUIRED FIELD ARE EMPTY!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else {
            dispatch(Signupaction(userOBj))
            if(USER_EMPTY_MSG ==="Email already exist"){

                toast.success(`${USER_EMPTY_MSG}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            else if(USER_EMPTY_MSG ){ 

                toast.success(`${USER_EMPTY_MSG}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                navigate("/login")

            }
            

                console.log(USER_DATA);
                
                
        }
        
         
    }
    

    return (
        <><ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
            <div className={style.maincontainer}>
                <div className={style.miniContainer}>
                    <div className={style.heading}>

                        <h1>Sign UP</h1>
                    </div>
                    <br />
                    <div className={style.todocontainer}>
                        <Grid>

                            <Grid     >

                                <TextField id="outlined-basic" value={user_name} onChange={(e) => setusername(e.target.value)} label="Enter Name" variant="outlined" fullWidth />
                            </Grid>
                            <br />
                            <Grid >
                                <TextField id="outlined-basic" value={email} onChange={(e) => setemail(e.target.value)} label="Enter Email" variant="outlined" fullWidth />

                            </Grid>
                            <br />
                            <Grid >
                                <TextField id="outlined-basic" value={contact} onChange={(e) => setconatct(e.target.value)} label="Enter Number" variant="outlined" fullWidth />

                            </Grid>
                            <br />
                            <Grid >
                                <TextField id="outlined-basic" value={password} onChange={(e) => setpassword(e.target.value)} label="Enter Password" variant="outlined" fullWidth />

                            </Grid>
                            <br />

                            <Grid >
                                <AppButtons onclick={signup} buttonTex="Sign UP" />                            </Grid>

                        </Grid>





                    </div>
                    <br />
                    <br />



                </div>
            </div>
        </>
    )
}

export default Signup