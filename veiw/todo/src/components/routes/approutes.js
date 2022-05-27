import { Route, Routes } from 'react-router-dom'

import React from 'react'
import Signup from '../authentification/signup'
import Todo from '../todo/todo'
import Login from '../authentification/login'
import SimpleTodo from '../todo/simpletodo'

const Approutes = () => {
    return (
        <>
        
            <Routes>
                <Route path="/" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                
                <Route path="/todo" element={<Todo/>}/>
                <Route path="/test" element={<SimpleTodo/>}/>
            </Routes>
            

        </>
    )
}

export default Approutes
