

import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import editimg from "../Asset/Images/edit.jpg";
// import delimg from "../Asset/Images/delete.jpg";

const Update = ()=>{
    let mynav=useNavigate();
    const [mydata , setMydata] = useState([]);
    const loadData =()=>{
        let url = "http://localhost:3000/students";
        axios.get(url).then((res)=>{
            setMydata(res.data)
        });
    }
    useEffect(()=>{
        loadData();
    },[])
    
    const delRec=(id)=>{
     let url= `http://localhost:3000/students/${id}`
     axios.delete(url).then((res)=>{
    alert("Record deleted successfully!!");
    loadData();
})
    }
    const recUpdate=(id)=>{
        //let url ="http://localhost:3000/students"
        //alert(id)
        mynav(`/myedit/`+id)
    }
    const ans = mydata.map((key)=>{
        return(
            <>
            <tr style={{backgroundColor:"#669DB3FF",}}>
               {/* <td>{key.id}</td> */}
                <td style={{color:"white"}}>{key.id}</td>
                <td style={{color:"white"}}>{key.rollno}</td>
                <td style={{color:"white"}}>{key.name}</td>
                <td style={{color:"white"}}>{key.city}</td>
                <td style={{color:"white"}}>{key.fees}</td>
                <td>
                  <a href="#" onClick={()=>{recUpdate(key.id)}}>  
                    <img  src={editimg} width="30px" height="30px"/> </a></td>
                <td>
                <a href="#" onClick={()=>{delRec(key.id)}} >

                    <img src={delimg} width="30px" height="30px"/> </a></td> 
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>Update Student Data</h1>
           <table style={{width:"600px",height:"500px",
           textAlign:"center",border:"5px solid black",fontSize:"20px"}}>

            <tr style={{backgroundColor:"#85B3D1FF",fontFamily:"sans-serif"
                ,fontWeight:"bold",fontSize:"20px"}}>
                <th>Id</th>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tbody>{ans}</tbody>
           </table>

        </>
    )
}

export default Update;