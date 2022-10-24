import React from 'react'
import Nave from '../Nav/Nav'
import Level from '../level/Level'
import anh2 from '../img/anh2.jpg'
import anh3 from '../img/anh3.jpg'
import anh4 from '../img/anh4.jpg'
const Test = () => {
  return (
    <div>

        <Nave />
        <div style={{display: 'flex',marginLeft:'80px'}}>
  <Level  id="1" img={anh2} des="Mức độ cơ bản"/>
  <Level  id="2" img={anh3} des="Mức độ bình thường"/>
  <Level  id="3" img={anh4} des="Mức độ Khó"/>
  </div>
    </div>
  )
}

export default Test