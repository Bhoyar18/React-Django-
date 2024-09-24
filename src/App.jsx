import { BrowserRouter,Routes,Route } from "react-router-dom";


import Layout from "./crudoperation/layout";
import Home from "./crudoperation/home";
import Insert from "./crudoperation/insert";
import Display from "./crudoperation/display";
import Update from "./crudoperation/update";
import RecEdit from "./crudoperation/edit";
import Search from "./crudoperation/search";
const App=()=>{
  return(
    <center>
    <>
    <div style={{ width:"100%",margin:"20px",padding:"20px",backgroundColor:"#ABD6DFFF"
    }}>
      <h1 style={{color:"blue"}}>CRUD OPERATION</h1>
      <hr/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/insert" element={<Insert/>}/>
          <Route path="/display" element={<Display/>}/>
          <Route path="/update" element={<Update/>}/>
          <Route path="myedit/:id" element={<RecEdit/>}/>
          <Route path="/search" element={<Search/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
      </div>
    </>
    </center>
  )
}
export default App;

















