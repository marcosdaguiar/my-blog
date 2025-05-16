import React from 'react'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <div className='jumbo'>
      <h1>Welcome to my blog made with React </h1>
      <p>Blog developed with MERN stack (Mongo, Express, React, and NodeJS</p>
      <Link to='/articles' className='btn'>See all articles</Link>
      </div>
  )
}
