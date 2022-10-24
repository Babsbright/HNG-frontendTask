
import './App.css';

                
import img1 from './Image/taskimg (5).png'
import img2 from './Image/taskimg (3).png'
import img3 from './Image/taskimg (4).png'
import slack from './Image/slack.png'
import github from './Image/Icon.png'

function App() {
  return (
    <div className="App">
      <div className='profile'>
        <img className='profile__img' src={img1}  />
        <h2 className='twitter'>Annette Black</h2>
        <h2 className='slack'>slack</h2>
      </div>

      <div className='btns'>
        <button className='btn__zuri'><a href='https://training.zuri.team/'>Twitter Link</a></button>
        <button className='books'><a href='https://books.zuri.team/'>Zuri Team</a></button>
        <button className='books'><a href='http://books.zuri.team'>Zuri Books</a></button>
        <button className='book__python'><a href='https://books.zuri.team/'>Python Books</a></button>
        <button className='pitch'><a href='https://background.zuri.team'>Background check for Coders</a></button>
        <button className='book__design'><a href='https://books.zuri.team/design-rules'>Design Books</a></button>

      </div>
      <div className='icons'>
        <img src = {slack} />
        <img src = {github} />
       
      </div>
   
   
      <footer>
        <img src = {img2} />
        <p>HNG Internship 9 Frontend Task</p>
        <img src ={img3} />
      </footer>
    </div>
  );
}

export default App;