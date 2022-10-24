import {React,useState} from 'react'
import Nave from '../Nav/Nav'
import { Button,Stack } from 'react-bootstrap';
import './Login.scss';
import anh1 from '../img/grand-canyon.jpg'
import { useNavigate,useParams } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

const Login = () => {

  const navigate = useNavigate();
  let params = useParams();
const[bol,setBol]= useState(false)
  const handClick=()=>{
    navigate(`/teams`);
  }
  const handLogin=()=>{
    navigate(`/login1`)
  }
  const handLout=()=>{
    sessionStorage.removeItem('lastname');
    navigate(`/`)
  }
  return (
    <div style={{postion: 'relative'}}>
    <div className="nav">
        <Nave />
    {!sessionStorage.getItem("lastname")&&  (<Stack direction="horizontal" gap={2} className="but">
  <Button as="a" variant="primary" onClick={handLogin}>
 Login
  </Button>
  <Button as="a" variant="success" onClick={()=>{navigate('/resgister')}}>
   Resgister
  </Button>
</Stack>)}
{
  sessionStorage.getItem("lastname")&&(<div   style={{marginRight:"30%"}}><span onClick={()=>{setBol(!bol)}} style={{position:'relative',right:'-1390px',cursor:'pointer'}}>Hello <span style={{fontWeight:"700",fontSize:"30px",fontStyle:'italic'}}>{sessionStorage.getItem("lastname")} </span><AiFillCaretDown /></span>
 { bol&&(<div onClick={handLout} style={{position:'relative',right:'-1390px',cursor:'pointer',backgroundColor:'gray',height:'30px',borderRadius:'5px'}}>Logout</div>)}
  </div>)
}
</div>
<div style={{display: 'flex',justifyContent: 'space-around'}}>
<div style={{marginTop:"80px"}}>
   <h2>TEST ENGLISH</h2> 
   <div style={{marginTop:"30px"}}>
   <div>Bạn có thực sự giỏi ENGLISH</div>
   <div onClick={handClick} style={{border:"1px solid black",backgroundColor:"black",color:"white",cursor:"pointer",marginTop:"20px",padding:"14px "}}>Bắt đầu ngay</div>
   </div>
</div>
<div style={{width:'860px',height:'860px'}}>
    
    <img style={{width:"100%"}} src={anh1} alt="..." />
</div>
</div>
    </div>
  )
}

export default Login