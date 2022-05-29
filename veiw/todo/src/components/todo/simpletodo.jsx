import { useState ,useEffect } from "react"
import axois from "axios"
import style from "../styles/todo.module.css" 
import axios from "axios"
const SimpleTodo =()=>{


    let [input , setinput ] = useState("")
    let [updateinput, setupdateinput ] = useState("")


    let [todo , setTodo] = useState([])
    let [update , setupdate] = useState(false)



    
    
    let [indexVal , setindexVal] = useState()
    


    const add= ()=>{
        setupdate(true)
        let  obg ={
            todo :input
        }
        
        axois.post("http://localhost:5000/api/todo/add" ,obg)
        .then((res)=>{
            console.log(res);

        })
        .catch((eerr)=>{
            console.log(eerr);

        })


    }


    const getadd= ()=>{
        setupdate(false)
        axois.get("http://localhost:5000/api/todo/get")
        .then((res)=>{
            
            setTodo(res.data)

        })
        .catch((eerr)=>{
            console.log(eerr);

        })


    }
    
    
    const edit = (ind)=>{
        setindexVal(ind)
        console.log(ind);
        

        
    }
    const obj2={
        todo :updateinput
    }
const updateli =(id)=>{


    setindexVal()
    
    setupdate(true)
    axios.patch(`http://localhost:5000/api/todo/update:${id}`, obj2 )
        
    .then((response) => {
        console.log(response);

        
    })
    .catch((err) => {
        console.log(err);

    })


}

useEffect(()=>{
    getadd()

},[update])
     return(
        <>
        <h1 className={`${style.check}`}>Todo</h1>
        <input type="text" onChange={(e)=>setinput(e.target.value)} />
        <button onClick={add}>ADD</button>
        <ul>
            {
                todo.map((data , index)=>{
                     // console.log(index);
                    
                    return index=== indexVal ?(

                        <li key={index}> <input type="text" value={updateinput} onChange={(e)=>setupdateinput(e.target.value)} />  
                        <button onClick={()=>updateli(data._id)} style={{width:"80px"}}>update</button> </li>
                    ):
                    <li key={index}> {data.todo}  <button onClick={()=>edit(index)} style={{width:"80px"}}>Edit</button> </li>


                })
            }
            
        </ul>


        </>
    )

}

export default SimpleTodo
