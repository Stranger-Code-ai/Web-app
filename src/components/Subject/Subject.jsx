import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import './Subject.css'

const Subject = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const parent = location.state.parent;
  let val = "";
  if(parent=="complete"){
    val = "Complete Revision Videos :"
  }else if(parent=="quick"){
    val = "Quick Revision Videos :"
  }else{
    val = "PYQ's solving Videos :"
  }

  return (

    <div className='container'>
      <h1 className='heading'>{val}</h1>
      <div className="card">
        <div onClick={()=>{navigate('/list',{state:{parent:location.state.parent,sub:"physics"}})}} className="sub">
          <img  src="assets/physics_hd.avif" alt="" />
        </div>
        <div onClick={()=>{navigate('/list',{state:{parent:location.state.parent,sub:"chemistry"}})}} className="sub">
          <img src="assets/chemistry-hd.jpg" alt="" />
        </div>
        <div onClick={()=>{navigate('/list',{state:{parent:location.state.parent,sub:"maths"}})}} className="sub">
          <img src="assets/maths.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Subject
