

import {Link,Outlet}  from "react-router-dom";

const Layout = ()=>{
    return(
        <>
        <Link style={{fontSize:"30px",color:"black",fontWeight:"bold"}} to="/home">Home</Link> | {" "}
        <Link style={{fontSize:"30px",color:"black",fontWeight:"bold"}} to="/display">Display</Link> | {" "}
        <Link style={{fontSize:"30px",color:"black",fontWeight:"bold"}} to="/insert">Insert</Link> | {" "}
        <Link style={{fontSize:"30px",color:"black",fontWeight:"bold"}} to="/update">Update</Link> | {" "}
        {/* <Link style={{fontSize:"24px",color:"black"}} to="/recedit">RecEdit</Link> | {" "} */}
        <Link style={{fontSize:"30px",color:"black",fontWeight:"bold"}} to="/search">Search</Link> | {" "}
        <br/>
        <br/>
         <hr size="5" color="black"/>
          <Outlet/>
         <hr size="5" color="black"/>
         <br/>
         www.company.com
    
        </>
    )
}


export default Layout;