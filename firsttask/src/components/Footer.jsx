import React from 'react'

import img2 from '../Image/taskimg (3).png'
import img3 from '../Image/taskimg (4).png'

function Footer() {
    return (
        <div>
<footer>
        <hr />
        <div className='footer'>
          <div className='zuri'> <img src={img2} alt='zuri logo' /></div>
          <p>HNG Internship 9 Frontend Task</p>
          <div className='ingressive'><img src={img3} alt='ingressive logo' /></div>
        </div>
      </footer>
        </div>
    )
}

export default Footer
