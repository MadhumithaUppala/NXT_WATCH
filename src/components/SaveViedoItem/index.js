import './index.css'
import {Link} from 'react-router-dom'

const SaveViedoItem = props => {
  const {viedodetails} = props
  const {
    id,
    viedoTitle,
    description,
    videoUrl,
    publishedAt,
    channelName,
    thumbnailUrl,
    viewCount,
  } = viedodetails
  return (
    <li>
      <div className='main-box'>
        <div className='image-box'>
          <Link to={`/saveViedos/${id}`}>
            <img className='image-size' src={thumbnailUrl} />
          </Link>
        </div>
        <div className='description-box'>
          <p>{viedoTitle}</p>
          <p>{channelName}</p>
          <p>{viewCount}</p>
          <p>{publishedAt}</p>
        </div>
      </div>
    </li>
  )
}

export default SaveViedoItem
