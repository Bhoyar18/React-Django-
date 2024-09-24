
// import { Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';


import { useParams } from "react-router-dom";
import { useState ,useEffect, } from "react";
import axios from"axios";

const RecEdit=()=>{
    const [mydata,setMydata]=useState({});
    const{id} = useParams();

    const loadData=()=>{
        let api=`${id}`
        axios.get(api).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[]);

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setMydata(values=>({...values,[name]:value}))

    }
    const editSave=()=>{
        let url=`${id}`
        axios.put(url,mydata).then((res)=>{
            alert("Record successfully updated")

        })

    }
    return(
        <Form style={{backgroundColor:"#A59C94FF",width:"500px"}}>
        <h1>Edit Data Here</h1>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Control onChange={handleInput} type="text" name="id" value={mydata.id}  placeholder="Edit Id : " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRollno.">
        <Form.Control onChange={handleInput} type="text" name="rollno" value={mydata.rollno}  placeholder="Edit Rollno : " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control onChange={handleInput} type="text" name="name" value={mydata.name} placeholder="Edit Name : " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Control onChange={handleInput} type="text" name="city" value={mydata.city} placeholder="Edit City : " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFees">
        <Form.Control onChange={handleInput} type="text" name="fees" value={mydata.fees} placeholder="Edit Fees : " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button onClick={editSave}  variant="primary" type="submit">
       Update Data
      </Button>
      </Form>
    
    )
}
export default RecEdit;