import Button from 'react-bootstrap/Button';
import { FormControl } from "react-bootstrap"
import style from "../components/todo.module.css"
import Todoli from './todoli';
import axois from "axios"
import { useState } from 'react';

const Todo = () => {

    const [input, setinput] = useState("")
    let [state, setstate] = useState(false)



    const add = () => {

        if(!input){
            return alert("requires field are empty")
        }
        setstate(true)
        setinput("")
        
        const obj = {
            todo: input
        }

        axois.post(`http://localhost:5000/api/todo/add`, obj)
            .then((res) => {
                console.log(res)


            })
            .catch((error) => {
                console.log(error)

            })

    }



    const DeleteAll = () => {

        setstate(true)
       setinput("")

        axois.delete(`http://localhost:5000/api/todo/delete`)
            .then((res) => {
                console.log(res)


            })
            .catch((error) => {
                console.log(error)

            })
    }


    return (
        <>
            <div className={style.maincontainer}>
                <div className={style.miniContainer}>
                    <div className={style.heading}>

                        <h1>Todo</h1>
                    </div>
                    <br />
                    <div className={style.todocontainer}>
                        <FormControl value={input} onChange={(e) => setinput(e.target.value)} className="w-75 p-2" type="email" placeholder="Enter email" />

                        <Button variant="danger" onClick={add}>Add</Button>
                        <Button variant="danger " onClick={DeleteAll}>Delete</Button>


                    </div>
                    <br />
                    <br />

                    <Todoli props={{ state, setstate }} />
                </div>
            </div>
        </>
    )
}


export default Todo