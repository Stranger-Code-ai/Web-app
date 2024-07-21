import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import Physics from '../../topics/physics';
import Chemistry from '../../topics/chemistry';
import Maths from '../../topics/maths';
import './List.css'

const List = () => {
  const location = useLocation();
  const str = location.state.parent;
  const sub = location.state.sub;
  console.log(str)

  let arr=[];
  if(sub==="physics"){
    if(str === "complete"){
      arr = Physics.complete;
    }
    else if(str==="quick"){
      arr = Physics.quick;
    }
    else{
      arr = Physics.practice;
    }
  }
  else if(sub==="chemistry"){
    if(str === "complete"){
      arr = Chemistry.complete;
    }
    else if(str==="quick"){
      arr = Chemistry.quick;
    }
    else{
      arr = Chemistry.practice;
    }
  }
  else{
    if(str === "complete"){
      arr = Maths.complete;
    }
    else if(str==="quick"){
      arr = Maths.quick;
    }
    else{
      arr = Maths.practice;
    }
  }

  const navigate = useNavigate();
  const directToMedia = (url)=>{
    navigate('/media',{state : {url}})
  }

  return (
    <div className='list'>
      <h1>Class 11 Chapter List</h1>
    {
      arr[0].map((ch)=>(
        <div className="class">
          <div className="section">
            <h4>{ch.title}</h4>
            <h4 className='name'>{ch.name}</h4>
            <button onClick={()=>directToMedia(ch.url)}>watch video</button>
          </div>
        </div>
      ))
    }
      <h1 className='class-12-h1'>Class 12 Chapter List</h1>
    {
      arr[1].map((ch)=>(
        <div className="class">
          
          <div className="section">
            <h4>{ch.title}</h4>
            <h4 className='name'>{ch.name}</h4>
            <button onClick={()=>directToMedia(ch.url)}>watch video</button>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default List
