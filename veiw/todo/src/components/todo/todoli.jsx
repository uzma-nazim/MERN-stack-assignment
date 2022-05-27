import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import "../../components/styles/todoli.css"
import axios from 'axios';
import { FormControl } from 'react-bootstrap';
const Todoli = ({ props }) => {
    let { state, setstate, loader, setloader } = props

    let [updateVal , setupdate] = useState("")
    let [array, setarry] = useState([])
    let [indexval, setindex] = useState()

    const getdata = async () => {
        setstate(false)




        await axios.get("http://localhost:5000/api/todo/get")
            .then((response) => {
                var { data } = response
                // console.log(data);
                setarry([...data])



            })
            .catch((err) => {
                console.log(err);

            })
    }

    useEffect(() => {
        getdata()


    }, [state])


    const deleteOne = (id) => {
        setstate(true)

        axios.delete(`http://localhost:5000/api/todo/delete:${id}`)

            .then((response) => {
                console.log(response);


            })
            .catch((err) => {
                console.log(err);

            })

    }
    const EditeOne = (ind ) => {
        setindex(ind)
        console.log(indexval);
        setupdate("")

        setstate(true)
        
    }
    const update = (id)=>{
        setstate(true)

        setindex()
        setupdate("")
        let obj2 ={
            todo:updateVal
        }
        
        
                axios.patch(`http://localhost:5000/api/todo/update:${id}`, obj2 )
        
                    .then((response) => {
                        console.log(response);
        
        
                    })
                    .catch((err) => {
                        console.log(err);
        
                    })

                }
                return (

        <>
            {/* <div className="mainlicontainer">



                <div className="liContainer">
                    <ul>





                        <li >dsdsd   <div>  <Button variant="danger">X</Button>
                            <Button variant="danger">Delete</Button>
                            <Button variant="danger">Edit</Button>
                        </div>
                        </li>





                    </ul>

                </div>
            </div> */}
            {
                !array ?
                    <div className="mainlicontainer">



                        <div className="liContainer">
                            <ul>




                            </ul>

                        </div>
                        {/* : loader? <h1 style={{textAlign:"center"}}>Loading...</h1> */}
                    </div> : <div className="mainlicontainer">



                        <div className="liContainer">


                            <ul>
                                {array.map((element, index) => {
                                    // console.log(element._id);
                                    return index===indexval? (

                                        

                                        
                                        <li key={index}><FormControl value={updateVal} onChange={(e) => setupdate(e.target.value)} className="w-75 p-2" type="email" placeholder="Enter email" />
                                        <div>
                                            
                                            <Button variant="danger" className='edit-btn' onClick={() => update(element._id)} >update</Button>
                                        </div>
                                        </li>
                                        
                                        

                                        ):
                                        
                                        <li key={index}>{element.todo} 
                                        <div>
                                            <Button onClick={() => deleteOne(element._id)} variant="danger">Delete</Button>
                                            <Button variant="danger" onClick={() => EditeOne( index)} >Edit</Button>
                                        </div>
                                        </li>

                                })}





                            </ul>

                        </div>
                    </div>

            }
        </>
    )
}
export default Todoli