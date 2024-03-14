import Header from '../Header'
import {Link} from 'react-router-dom'
import './index.css'

const Siderbar = () => {
  return (
    <>
      <Header />
      <div className='sidebar'>
        <ul>
          <li className='item-1'>
            <Link to='/' className='home'>
              Home
            </Link>
          </li>
          <li className='item-2'>
            <Link to='/trending' className='trend'>
              Trending
            </Link>
          </li>
          <li className='item-3'>
            <Link to='/Gameing' className='game'>
              Gameing
            </Link>
          </li>
          <li className='item-4'>
            <Link to='/Saveviedos' className='save'>
              Save viedos
            </Link>
          </li>
        </ul>

        <div>
          <h1 className='head'> &nbsp;&nbsp;&nbsp;&nbsp;CONTACT US</h1>
          <div className='bullet'>
            <img
              className='img-1'
              src='https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
              alt='facebook logo'
            />
            <img
              className='img-2'
              src='https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'
              alt='twitter logo'
            />
            <img
              className='img-3'
              src='https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'
              alt='linkedin  logo'
            />
          </div>
          <p className='pa'>
            Enjoy! now you can see your <br /> recommendations!
          </p>
        </div>
      </div>
    </>
  )
}
export default Siderbar
