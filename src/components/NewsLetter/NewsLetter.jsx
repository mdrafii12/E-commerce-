import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe and stay Updated</p>
        <div>
            <input type="email" placeholder='YourEmail id' />
            <button>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter
