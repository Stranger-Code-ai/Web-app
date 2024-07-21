import React from 'react'
import { useLocation } from 'react-router'
import ReactPlayer from 'react-player'
import './Media.css'

const Media = () => {
  const location = useLocation();
  const url = location.state.url
  console.log(url)
  return (
    <div className="video-container">
      <div className="media-player">
        <ReactPlayer width='90%'height='90%' controls={true} url={url} />
      </div>
      
    </div>
  )
}

export default Media
