import React from 'react'

const Video = ({src}) => {
  return (
      <div className='video_video'>
          <div className='video_particular'>
              
          <iframe className='border_radius' width="300" height="250" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          
          </div>
          <div className='video_particular'>
              
          <iframe className='border_radius' width="300" height="250" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
    </div>
  )
}

export default Video
