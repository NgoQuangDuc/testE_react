import React from 'react'
import Nav from '../Nav/Nav'
import{useState,useEffect} from 'react'
import './About.scss'
import axios from 'axios'
import _ from 'lodash'
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();

  function TaoSoNgauNhien(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
  const[inputs,setInputs]=useState([{question:"",level:0,anserwer:[{id:TaoSoNgauNhien(1, 1000) ,anserwer:"",isCheck:false},{id:TaoSoNgauNhien(1, 1000),anserwer:"",isCheck:false},{id:TaoSoNgauNhien(1, 1000),anserwer:"",isCheck:false}]}])
  const ADDs=()=>{
    let c={question:"",level:0,anserwer:[{id:1,anserwer:""},{id:1,anserwer:""},{id:1,anserwer:""}]}
    setInputs([...inputs,c])
  }
const handChange=(e,index1,index2)=>{

  let t=_.cloneDeep(inputs)
if(index2==='-1'){
  t[index1].question=e;
}
 if(e==="box"){
  t[index1].anserwer[index2].isCheck=! t[index1].anserwer[index2].isCheck;
}
if(index2>=0&&e!=="box"){
  t[index1].anserwer[index2].anserwer=e;
}
if(index2==='-2'){
  t[index1].level=e
}
setInputs(t)


}
const handMove=async()=>{
  if(!sessionStorage.getItem("lastname")){
    alert("Ban chua dang nhap")
    navigate(`/`);
  
  }
  else{
  let ans=[]
  let arr=[]
inputs.map((dd)=>{

 dd.anserwer.map(c=>{

let d= {id:TaoSoNgauNhien(1,1000),question:dd.question, anserwer:c.anserwer,id_anserwer:c.id,level:dd.level}
 arr.push(d)
     })
 
   })
 let data=await axios.post('http://localhost:8081/add',arr, {withCredentials:true})
 console.log(data)


inputs.map((r)=>{
  r.anserwer.map(c=>{
    if(c.isCheck===true){
      let d={id:TaoSoNgauNhien(1,1000),answer_id:c.id,level:r.level}
      ans.push(d)
    }
  })
})
 let answer = await axios.post('http://localhost:8081/addanswer',ans, {withCredentials:true})
alert(answer.data.err)
}}
  return (
  
    <div>
          <Nav />
       <h2>ADD NEW QUESTION</h2>
       <div className="alls">
      {
        inputs&&inputs.length>0&&inputs.map((e,index1)=>{
          return (
            <div key={index1}>

         <span   className="ai">Question: <input type="text" values={e.question} onChange={(e)=>handChange(e.target.value,index1,"-1")}  /><button onClick={ADDs}>ADD</button></span>
            <div>Level: <select onChange={(e)=>{handChange(e.target.value,index1,"-2")}} style={{width:"180px",border:"none"}}>
            <option value="" selected hidden>Choose lever</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              </select> </div>
         <div>Answer:
          <div>
            {e.anserwer.map((d,index2)=>{
              return (
               
                <div key={index2}  className="ui">Answer:<span><input checked={d.isCheck} onChange={()=>handChange("box",index1,index2)} type="checkbox"/><input type="text"values={d.anserwer} onChange={(e)=>handChange(e.target.value,index1,index2)} /></span> 
                </div>
              
              )
            })}
          </div>
         </div>
         <span>
          
         </span>
         <br />   <br />   <br />
            </div>
          )
        })
      }
      <button type="button" style={{width:"90px",height:"60px",position:'relative',left:'240px',bottom:'30px',backgroundColor:'red'}} onClick={handMove}>Submit</button>
       </div>
       </div>
  )
}

export default About