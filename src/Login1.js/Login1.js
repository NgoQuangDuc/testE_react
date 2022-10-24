import React from 'react'
import './Login1.scss'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login1 = () => {
  const [login,setLogin] = useState({user:"",password:""})
  const navigate = useNavigate();
  const handLogin = async() => {
let a=await axios.post('http://localhost:8081/login',login, {withCredentials:true})

if(a.data.data===0){
  alert("PASS or User not true")

}
else{
  sessionStorage.setItem("lastname", login.user);
  navigate(`/${login.user}`);
}
  }
  return (
    <div className="alles">
        <h2>Login</h2>
        <div className="login">
       <div><span style={{position: 'relative',right: '239px',fontWeight: '800'}}>User:</span><input type="text" value={login.user} onChange={(e)=>setLogin({...login,user:e.target.value})}/></div> 
       <div> <span style={{position: 'relative',right: '225px',fontWeight: '800'}}>PassWord:</span><input type="text" value={login.password} onChange={(e)=>setLogin({...login,password: e.target.value})}/></div> 
       </div>
       <button style={{position: 'relative',left: '320px',top: '10px',padding:'10px'}} className="btn34" type="button" onClick={handLogin}>Login</button>
    <div><span>Nếu bạn chưa có tài khoản,</span> <a href='./resgister' style={{textDecoration:'none',fontStyle:'italic'}}>Resgister</a></div>  
    </div>
  )
}

export default Login1