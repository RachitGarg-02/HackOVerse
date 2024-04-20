import React from 'react'
import Home from './Home'
import Blog from './Blog'
import Advisors from './Advisors'
import Form from './Form'

const Landing = ({handleFormDataChange}) => {
  return (
    <div>
          <Home />
          <Blog />
          <Form onFormDataChange={handleFormDataChange} />
          <Advisors/>
    </div>
  )
}

export default Landing
