import Cookies from 'js-cookie'
import './index.css'

import {useNavigate} from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  const loggingout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }
  return (
    <div className='container'>
      <div className='profile-logo'>
        <img
          className='image-setting'
          src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          alt='logo'
        />
      </div>
      <div className='log'>
        <img
          className='profile'
          src='https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'
          alt='profile'
        />
        <button className='button-size' onClick={loggingout}>
          logout
        </button>
      </div>
    </div>
  )
}
export default Header
