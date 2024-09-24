
// 10 may
import axios from "axios";
import{useState} from "react";


const Search=()=>{
    const [rollno,setRollno]=useState("");
    const[mydata,setMydata]=useState([]);

    const handleSubmit=()=>{
        let url=`http://localhost:3000/students/?rollno=${rollno}`;
        axios.get(url).then((res)=>{
            setMydata(res.data);
        });

    }

    const ans = mydata.map((key)=>{
        return(
            <>
            <h1>Name : {key.name}</h1>
            <h2>Rollno : {key.rollno}</h2>
            <h2>City  :{key.city}</h2>
            <h2>Total fees : {key.fees}</h2>
            <hr size="2" color="grey"/>
            </>
        )
    })
    return(
        <>
        <h1>Search Student Records </h1>
        Enter Rollno : < input type="text" value={rollno} onChange={(e)=>{setRollno(e.target.value)}}/>
        <br/>
        <br/>
        <button style={{backgroundColor:"blue",color:"white",borderRadius:"5px"}} onClick={handleSubmit}>Search record</button>
        {ans}
        </>
    )
}
export default Search;