import {Link} from 'react-router-dom'
import './index.css'
import React from 'react'
import ReactPlayer from 'react-player'
const EachItemGameing = props => {
  const {viedodetails} = props
  const {id, thumbnailUrl, viedoTitle, viewCount} = viedodetails
  return (
    <li>
      <div className='total'>
        <div>
          <Link to={`/Gaming/${id}`}>
            <img className='gamingitem' src={thumbnailUrl} alt='hskaka' />
          </Link>
        </div>
        <div>
          <p className='viedoTitle'>{viedoTitle}</p>
          <p className='count'>{viewCount} Watching Worldwide</p>
        </div>
      </div>
    </li>
  )
}
export default EachItemGameing
