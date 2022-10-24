import React from 'react'
import {  useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import './Paper.scss'
import axios from 'axios';
import Modal from '../Modal/Modal'
import _ from 'lodash'
import ReactPaginate from 'react-paginate';
const Paper = () => {
  let params = useParams();
  const[contentRight,setContentRight]=useState([])
  const[item,setItems]=useState([])
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const[datas,setDatas]=useState([])
  const[hour,setHours] = useState(1)
  const [minute,setMinutes] = useState(0)
  const [show, setShow] = useState(false);
const[answer,setAnwer]=useState(9)
  const fetch=async(ds,id) =>{
    let r=await axios.post('http://localhost:8081/answer',{ds,id:id})
    return r
  }
  const handlePageClick = (event) => {
    setCurrentItems(event.selected+1)

  }
  const pagtionss=async()=>{
let data=await axios.post('http://localhost:8081/pagtions',{currentItems:currentItems}, {withCredentials:true})
setPageCount(data.data.countPage)
const datas= data.data.data.rows.map(e=>{
  e.isChecked=false;
  return e;
})
var result =   _.chain(datas)
// Group the elements of Array based on `color` property
.groupBy("question")
// `key` is group's name (color), `value` is the array of objects
.map((value, key) => ({  question: key, users: value }))
.value()


setItems(result)
  }
  const Nopbai=async()=>{

 
let ds=datas.filter((c)=>c.isChecked===true)



let r=await fetch(ds,params.id)

setAnwer(r.data.data)
  setShow(true);
  }
  const fetchQuestion=async()=>{
    let data=await axios.post('http://localhost:8081/',{level:params.id})

const datas= data.data.data=data.data.data.map(e=>{
      e.isChecked=false;
      return e;
    })
    
  
    setDatas(datas)
  }
  useEffect(()=>{
    fetchQuestion()
  },[]) 
  useEffect(()=>{
    pagtionss()
 
  },[currentItems])

  const handClick=()=>{
    // var btns = document.getElementsByClassName("bor");
   
//     for(let i=0; i<btns.length; i++){
//  btns[i].addEventListener("click",()=>{
//   for(let i=0; i<btns.length; i++) btns[i].classList.remove("active")
// btns[i].classList.add("active")
//   })
// }
var result =   _.chain(datas)
    // Group the elements of Array based on `color` property
    .groupBy("question")
    // `key` is group's name (color), `value` is the array of objects
    .map((value, key) => ({  question: key, users: value }))
    .value()
  //  result.map(c=>{
  //   c.users.map(d=>{
  //     if(d.isChecked===true) {
  //       c.isChecked=true;
        
  //     }
  //     else{
  //       c.isChecked=false
  //     }
  //   })
  //  })
  for(var i=0;i<result.length;i++){
    result[i].isChecked=false;
    for(var j=0;j<result[i].users.length;j++){
      if(result[i].users[j].isChecked===true) {
        result[i].isChecked=true;
        break;}
    }
  }

setContentRight(result)
  }
  useEffect(()=>{
handClick()
  },[datas]);
//   useEffect(()=>{
//     if(hour===0&&minute===0){
//   Nopbai()
//     }
//     else{
// setTimeout(()=>{
// if(minute>0){ 
//   let a=minute;
//   a--;
// setMinutes(a);
// }
// else{
//   setMinutes(59)
//   let c=hour-1;
//   setHours(c)

// }
// },1000)}
//   }

//   ,[minute||hour])

const handChange=(id)=>{
let o=datas.findIndex(r=>r.id_anserwer===id)

let d=_.cloneDeep(datas)
d[o].isChecked=!d[o].isChecked

setDatas(d)

}

    
 

  return (
    <div>
    <span style={{position: 'relative',left:'-700px'}}><a>Home</a>/<a>List</a>/<span>Test 1</span></span> 
    <div className="all">
           <Modal show={show} setShow={setShow} answer={answer} count={pageCount}/>
 <div className="all1"> <h1>Invoice {params.id}: </h1>
 {
  item&&item.length>0&&item.map((d,index1)=>{
    return(
      <div key={index1} style={{paddingRight:'250px'}}>
      <div >Câu hỏi {index1+1}: <span>{d.question}</span> </div>
      <div style={{display:'flex',flexDirection:'column',textAlign:'left',marginLeft:'330px'}}>
      { 
           
     d.users&&d.users.length>0&& d.users.map((da,index2)=>{
      let in2=datas.findIndex(c=>c.id_anserwer===da.id_anserwer)

      return(
              <span key={index2}><input type="checkbox"  checked={datas[in2].isChecked} onChange={()=>handChange(da.id_anserwer)} />{da.anserwer}</span>)
            
      })
         
      }
     </div>
      </div>
    )
  })
 }

 <div style={{marginTop:"160px"}}>
    <button id="sub" style={{padding:"20px"}} onClick={Nopbai}>Finish</button>
 </div>
 </div>
 <p className="all2">
  <p style={{fontWeight:'500',fontSize:'50px'}}>{hour}:{minute}</p>
  <div>
    {
    
      contentRight.map((e,index)=>{
        return(
<div key={index} className={e.isChecked?"active bor":"bor"}  >{index+1}</div>)

      })
    }

</div>

 </p>
  </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

  </div>
  )
}

export default Paper