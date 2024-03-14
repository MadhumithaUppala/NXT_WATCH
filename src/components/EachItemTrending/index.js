import {Link} from 'react-router-dom'
import './index.css'
const EachItemTrending = props => {
  const {viedodetails} = props
  const {id, thumbnailUrl, viedoTitle, channelName, viewCount, publishDate} =
    viedodetails

  return (
    <li>
      <div className='trendingitem'>
        <div className='big-box'>
          <Link to={`/Trending/${id}`}>
            <img className='trending-item' src={thumbnailUrl} alt='hskaka' />
          </Link>
        </div>
        <div className='small-box'>
          <p className='viedo-title'>{viedoTitle}</p>
          <p className='channalname '>{channelName}</p>
          <div className='name'>
            <p className='view-count'>{viewCount}</p>
            <p className='publish'>{publishDate}</p>
          </div>
        </div>
      </div>
    </li>
  )
}
export default EachItemTrending
