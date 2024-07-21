import React from 'react'
import './JeeList.css'
import JeeTipsList from  '../../topics/jeetips'
import { useNavigate } from 'react-router'

const JeeList = () => {
  const navigate = useNavigate();
  return (
    <div className='jeelist'>
      <h1> Jee Tips & Tricks Video </h1>
      {
        JeeTipsList.map((obj)=>(
          <div className="class">
            <div className="section">
              <h4>{obj.title}</h4>
              <h4 className='name'>{obj.name}</h4>
              <button onClick={()=>navigate('/media',{state : {url:obj.url}})}>watch video</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default JeeList
