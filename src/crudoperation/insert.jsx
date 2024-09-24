
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const[ input,setInput]=useState({});
    const handleInput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values,[name]:value}))
    }
    const handleSubmit=()=>{
        let url="http://localhost:3000/students";
        axios.post(url,input).then((res)=>{
            alert("Data saved successfully");
        })
    }
    return(
        <Form style={{backgroundColor:"#A59C94FF",width:"500px",}}>
    <h1>Insert Data of Students</h1>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Control onChange={handleInput} type="text" name="id" placeholder="Enter Your Id : " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRollno.">
        <Form.Control onChange={handleInput} type="text" name="rollno" placeholder="Enter Your Rollno : " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNamel">
        <Form.Control onChange={handleInput} type="text" name="name" placeholder="Enter Your Name : " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Control onChange={handleInput} type="text" name="city" placeholder="Enter Your City : " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFees">
        <Form.Control onChange={handleInput} type="text" name="fees" placeholder="Enter Your Fees : " />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
       Save Data
      </Button>
    </Form>
  );
}
    
 
export default Insert;