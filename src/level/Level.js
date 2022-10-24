import React from 'react'
import './Level.scss';
import { useNavigate } from "react-router-dom";
const Level = (props) => {
    const navigate = useNavigate();
    const{img,id,des}=props;
 const handTest=(id)=>{
  if(sessionStorage.getItem("lastname")){
    navigate(`/test/${id}`);}
    else {
      alert("Ban chua dang nhap")
      navigate(`/`);}
    
 }
  return (
    <div className="level">
        <img src={img}/>
        <h3>Quiz {id}: </h3>
        <div>{des}</div>
    <button onClick={()=>handTest(id)} style={{backgroundColor:'blue',borderRadius:"6px"}}>Start Now</button>
    </div>
  )
}

export default Level