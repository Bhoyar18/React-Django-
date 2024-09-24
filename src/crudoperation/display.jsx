

// 10 may
import { useState,useEffect } from "react";
import axios from "axios";


const Display=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=()=>{
        let url="http://localhost:3000/students";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        });
    }
    useEffect(()=>{
        loadData();
    },[]);
    const ans = mydata.map((key)=>{
        return(
            <>
            <tr style={{backgroundColor:"#078282FF"
            }}>
            
                <td style={{color:"white"}} >{key.id}</td>
                <td style={{color:"white"}}>{key.rollno}</td>
                <td style={{color:"white"}}>{key.name}</td>
                <td style={{color:"white"}}>{key.city}</td>
                <td style={{color:"white"}}>{key.fees}</td>
            </tr>
            </>
        )
    });
    return(
                <>
                <h1>Display Student Records</h1>
                <table style={{width:"600px" ,height:"500px",fontSize:"20px",
                textAlign:"center", border:"5px solid black"
                
                }}>
                <tr style={{backgroundColor:"#95DBE5FF",fontWeight:"bold"
                    ,fontFamily:"sans-serif"
                }}>
                    <th>Id</th>
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                </tr>
                <tbody>{ans}</tbody>
               </table>
                </>
            )
        }
    

export default Display ;