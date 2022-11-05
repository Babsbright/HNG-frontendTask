import React from 'react'


import img2 from './Image/taskimg (3).png'
import img3 from './Image/taskimg (4).png'
import slack from './Image/slack.png'
import github from './Image/Icon.png'
import vector from './Image/taskimg (2).png'
import vector2 from './Image/desktop_share.png'
import profile from './Image/tolu.png'
import {Link} from 'react-router-dom'
import Footer from '../Footer'

function Profile() {
    return (
        <div>
            {/* PROFILE */}

      <img className='vector' src={vector} alt='mobile menu' />
      <img className='vector2' src={vector2} alt='desktop share' />

      <div className='profile'>

        <img id='profile__img' src={profile} alt='profile' />
        <h2 id='twitter'>Tolulope Bright</h2>
        <h2 id='slack' className='slack'>Tolulope Bright</h2>
      </div>

      {/* BUTTONS */}

      <div className='btns'>
        <button id='btn__zuri'><a href='https://training.zuri.team/'>Twitter Link</a></button>
        <button id='books'><a href='https://books.zuri.team/'>Zuri Team</a></button>
        <button id='books'><a href='http://books.zuri.team'>Zuri Books</a></button>
        <button id='book__python'><a href='https://books.zuri.team/python-for-beginners?ref_id=<tolulopeBright>'>Python Books</a></button>
        <button id='pitch'><a href='https://background.zuri.team'>Background check for Coders</a></button>
        <button id='book__design'><a href='https://books.zuri.team/design-rules'>Design Books</a></button>
       <Link to ='/contact'>
       <button id='book__design'>Contact Me</button>

       </Link>
      </div>


      {/* ICONS */}

      <div className='icons'>
        <img src={slack} alt='slack logo' />
        <a href='https://github.com/Babsbright/HNG-frontendTask'><img src={github} alt='github logo' /></a>
      </div>


      {/* FOOTER */}

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

export default Profile
