import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import "../components/todoli.css"
import axios from 'axios';
const Todoli = ({props ,setstate}) => {
     
    // console.log(props.setstate);

let [array ,setarry] = useState([])
     
    const getdata = async () => {
        props.setstate(false)



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


    }, [props])


    const deleteOne =(id)=>{
        props.setstate(true)

         axios.delete(`http://localhost:5000/api/todo/delete:${id}`)

        .then((response) => {
            console.log(response);


        })
        .catch((err) => {
            console.log(err);

        })

    }
    // console.log(array);

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
                    </div> : <div className="mainlicontainer">



                        <div className="liContainer">
                            <ul>
                                {array.map((element, index) => {
                                    // console.log(element._id);
                                    return (

                                        <li key={index}>{element.todo}   <div>  
                                            <Button onClick={()=>deleteOne(element._id)} variant="danger">Delete</Button>
                                            <Button variant="danger">Edit</Button>
                                        </div>
                                        </li>
                                    )



                                })}





                            </ul>

                        </div>
                    </div>

            }
        </>
    )
}
export default Todoli