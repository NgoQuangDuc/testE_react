import React from 'react'
import {useState} from 'react'
import axios from 'axios'
const Resgister = () => {
    const[res,setRes]= useState({user:'',password:'',repassword:''})
    const handResgister=async()=>{
if(res.password!==res.repassword){
    alert("PASS not same")
    setRes({user:'',password:'',repassword:''})
}
else{
    let c={user:res.user,password:res.password,group_id:2}
let a=await axios.post("http://localhost:8081/resgister",c)
alert("success!")
setRes({user:'',password:'',repassword:''})
}
    }
  return (
    
        <div className="alles">
        <h2>Resgister</h2>
        <div className="login">
       <div><span style={{position: 'relative',right: '239px',fontWeight: '800'}}>User:</span><input type="text" value={res.user} onChange={(e)=>setRes({...res,user:e.target.value})} /></div> 
       <div> <span style={{position: 'relative',right: '225px',fontWeight: '800'}}>PassWord:</span><input type="text" value={res.password} onChange={(e)=>setRes({...res,password:e.target.value})}/></div> 
       <div> <span style={{position: 'relative',right: '205px',fontWeight: '800'}}>Confirm Password:</span><input type="text" value={res.repassword} onChange={(e)=>setRes({...res,repassword:e.target.value})}/></div> 
       </div>
       <button style={{position: 'relative',left: '320px',top: '10px',padding:'10px'}} className="btn34" type="button" onClick={handResgister}>Resgister</button>
    </div>
  )
}

export default Resgister