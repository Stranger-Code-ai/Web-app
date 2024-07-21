import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <div className="main-text">
          <h1>Struggling to find <br/> <span> the BEST IIT-JEE Preparation </span> <br/> videos on YouTube <span>?</span></h1>
        <p > We know wading through endless YouTube videos can be a time-suck. That's why an IIT Kanpur graduate who is also a JEE Mentor at Physics Wallah has curated the best ones for you. Now,<span> focus on what matters </span>– mastering the concepts and acing your exams <span>!</span></p>
      </div>
      <div className="main-links">
        <div className="sample">
        <div className="box">
            <svg className='heading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"></path></svg>
            <h1>Complete Revision Video</h1>
            <p>To watch video's of duration more than 4 hour for detailed revision of particular chapter, click on the visit button below.</p>
            <div onClick={()=>{navigate('/subject',{state:{parent:"complete"}})}} className='bottom'>
              <h4>Visit</h4>
              <svg className='link' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path></svg>
            </div>
          </div>
        </div>
        <div className="sample">
          <div className="box">
            <svg className='heading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 5C13.018 5 13.9852 5.21731 14.8579 5.60806L13.2954 7.16944C12.8822 7.05892 12.448 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3807 7.55964 14.6307 8.46447 15.5355L7.05025 16.9497L6.89445 16.7889C5.71957 15.5368 5 13.8525 5 12C5 8.13401 8.13401 5 12 5ZM18.3924 9.14312C18.7829 10.0155 19 10.9824 19 12C19 13.933 18.2165 15.683 16.9497 16.9497L15.5355 15.5355C16.4404 14.6307 17 13.3807 17 12C17 11.552 16.9411 11.1178 16.8306 10.7046L18.3924 9.14312ZM16.2426 6.34315L17.6569 7.75736L13.9325 11.483C13.9765 11.6479 14 11.8212 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C12.1788 10 12.3521 10.0235 12.517 10.0675L16.2426 6.34315Z"></path></svg>
            <h1>Quick Revision Video</h1>
            <p>To watch video's of duration less than 1.5 hour for quick and summarised revision of particular chapter, click on the visit button below.</p>
            <div onClick={()=>{navigate('/subject',{state:{parent:"quick"}})}} className='bottom'>
              <h4>Visit</h4>
              <svg className='link' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path></svg>
            </div>
          </div>
        </div>
        <div className="sample"><div className="box">
          <svg className='heading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 15.2454V22.1169C17 22.393 16.7761 22.617 16.5 22.617C16.4094 22.617 16.3205 22.5923 16.2428 22.5457L12 20L7.75725 22.5457C7.52046 22.6877 7.21333 22.6109 7.07125 22.3742C7.02463 22.2964 7 22.2075 7 22.1169V15.2454C5.17107 13.7793 4 11.5264 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5264 18.8289 13.7793 17 15.2454ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15ZM12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13Z"></path></svg>
            <h1>PYQ's Practice Video</h1>
            <p>To watch video's for practicing pyqs of JEE for particular chapter, click on the visit button below.</p>
            <div onClick={()=>{navigate('/subject',{state:{parent:"practice"}})}} className='bottom'>
              <h4>Visit</h4>
              <svg className='link' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path></svg>
            </div>
          </div></div>
        <div className="sample"><div className="box">
          <svg className='heading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.3349 11.5022L11.5049 11.5027C13.9902 11.5027 16.0049 13.5174 16.0049 16.0027L9.00388 16.0018L9.00488 17.0027L17.0049 17.0019V16.0027C17.0049 14.9202 16.6867 13.8996 16.1188 13.0019L19.0049 13.0027C20.9972 13.0027 22.7173 14.1679 23.521 15.8541C21.1562 18.9747 17.3268 21.0027 13.0049 21.0027C10.2436 21.0027 7.90437 20.4121 6.00447 19.3779L6.00592 10.0737C7.25147 10.2521 8.39122 10.7583 9.3349 11.5022ZM4.00488 9.00268C4.51772 9.00268 4.94039 9.38872 4.99816 9.88606L5.00488 10.0018V19.0027C5.00488 19.555 4.55717 20.0027 4.00488 20.0027H2.00488C1.4526 20.0027 1.00488 19.555 1.00488 19.0027V10.0027C1.00488 9.45039 1.4526 9.00268 2.00488 9.00268H4.00488ZM13.6513 3.57806L14.0046 3.93183L14.3584 3.57806C15.3347 2.60175 16.9177 2.60175 17.894 3.57806C18.8703 4.55437 18.8703 6.13728 17.894 7.11359L14.0049 11.0027L10.1158 7.11359C9.13948 6.13728 9.13948 4.55437 10.1158 3.57806C11.0921 2.60175 12.675 2.60175 13.6513 3.57806Z"></path></svg>
            <h1>JEE Tips and Tricks Video</h1>
            <p>To watch tips and tricks video that will help you in your preparation, click on the visit button below</p>
            <div onClick={()=>{navigate('/jeetips',{state:{parent:"jeetips"}})}} className='bottom'>
              <h4>Visit</h4>
              <svg className='link' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path></svg>
            </div>
          </div></div>
      </div>
    </div>
  )
}

export default Home
