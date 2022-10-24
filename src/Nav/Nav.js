import React from 'react'
import { NavLink} from "react-router-dom";
import './Nav.scss';
import { useNavigate } from "react-router-dom";
const Nave = () => {
  const navigate = useNavigate();
  const handClick=()=>{
  let d=document.getElementById("sd")
d.classList.remove('active');
  }
  const handClickss=()=>{
    navigate(`/`);
  }
  return (

     
<div className="nav">
      <h1 style={{cursor:'pointer'}} onClick={handClickss}>Home</h1>
      <nav>
        <NavLink id="sd" style={({ isActive }) => (isActive ? {backgroundColor:"blue"} : '')}
 to="/">Home</NavLink> 
        <NavLink onClick={handClick} className={({ isActive }) => (isActive ? 'active' : '')}

   to="/teams">Test</NavLink>
        <NavLink onClick={handClick} className={({ isActive }) => (isActive ? 'active' : '')}
 to="/about">About</NavLink>
      </nav>
    </div>  
  )
}

export default Nave