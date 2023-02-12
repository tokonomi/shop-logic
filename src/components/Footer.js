import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <h2> Subscribe for a <span> 25% Discount </span></h2>
        <p> Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec. </p>
      </div>

      <form>
        <input type="email" placeholder='Your E-mail' required />
        <button type='submit'> Subscribe </button>
      </form>
    </div>
  )
}

export default Footer