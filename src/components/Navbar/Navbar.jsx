import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [active,setActive] = useState(false);


  return (
    <div className='main-nav'>
      <div className='nav'>
        <div className="nav-logo"><span>L</span>earn<span>H</span>ub<span>.</span></div>
        <div className="nav-content">
          <div className="nav-body">
            <h3 onClick={()=>{navigate('/subject',{state:{parent:"complete"}})}}>Complete Revision</h3>
            <h3 onClick={()=>{navigate('/subject',{state:{parent:"quick"}})}}>Quick Revision</h3>
            <h3 onClick={()=>{navigate('/subject',{state:{parent:"practice"}})}}>PYQ Solving</h3>
            <h3 onClick={()=>{navigate('/jeetips',{state:{parent:"jeetips"}})}}>JEE Tips</h3>
          </div>
          <Link className='nav-btn' to='/'>Home</Link>
        </div>
        <div onClick={()=>setActive(!active)} className="responsive-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
          
        </div>
      </div>
      {
        active ? <div className="nav-responsive">
        <h3 onClick={()=>{navigate('/');setActive(false)}} className='btn' to='/'>Home</h3>
        <h3 onClick={()=>{navigate('/subject',{state:{parent:"complete"}});setActive(false)}}>Complete Revision</h3>
        <h3 onClick={()=>{navigate('/subject',{state:{parent:"quick"}});setActive(false)}}>Quick Revision</h3>
        <h3 onClick={()=>{navigate('/subject',{state:{parent:"practice"}});setActive(false)}}>PYQ Solving</h3>
        <h3 onClick={()=>{navigate('/jeetips',{state:{parent:"jeetips"}});setActive(false)}}>JEE Tips</h3>
      </div> : null
      }
    </div>
  )
}

export default Navbar
