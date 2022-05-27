import React, { useState } from 'react'

import Signupaction from '../store/action/signUpaction'
import style from "../styles/signup.module.css"
import AppButtons from './button'

import { Grid, TextField } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'
import BASE_URI from '../../core'


function Signup() {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let [user_name, setusername] = useState("")
    let [contact, setconatct] = useState("")
    let [userdata, setuserdata] = useState(true)
    let navigate = useNavigate()

    // let { USER_DATA, USER_EMPTY_MSG } = useSelector(state => state.signupReducer)


    const dispatch = useDispatch();

    const signup = async () => {


        setemail("")
        setpassword("")
        setusername("")
        setconatct("")

        const userOBj = {

            user_name,
            email,
            contact,
            password
        }
        if (!user_name || !email || !contact || !password) {


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
            setuserdata(false)
            axios.post(`${BASE_URI}signup`, userOBj)
                .then((res) => {
                    const { data } = res.data
                    setuserdata(true)

                    if (data) {
                        toast.success('Successfully SignUp', {
                            position: "top-right",
                            autoClose: 500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        setTimeout(() => {
                            navigate("/login")

                        }, 1500)
                    }
                    else {
                        toast.error('Email already exist', {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }

                })
                .catch((err) => {
                    console.log(err);

                })
        }


    }

    console.log(userdata);
    return (
        <>
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
                                <TextField id="outlined-basic" type="number" value={contact} onChange={(e) => setconatct(e.target.value)} label="Enter Number" variant="outlined" fullWidth />

                            </Grid>
                            <br />
                            <Grid >
                                <TextField id="outlined-basic" type="password" value={password} onChange={(e) => setpassword(e.target.value)} label="Enter Password" variant="outlined" fullWidth />

                            </Grid>
                            <br />

                            <Grid >
                                <AppButtons onclick={signup} data={userdata} buttonTex="Sign UP" />                            </Grid>

                        </Grid>




                        <br />

                        <Grid>
                            <Link to="/login"> <p className={style.smalltex} > have an account?  <span> Login in</span></p></Link>
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