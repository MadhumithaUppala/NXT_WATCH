import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Sidebar from '../Sidebar'
import EachItemHome from '../EachItemHome'
import './index.css'
const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
const HomeViedos = () => {
  const [input, setinput] = useState('')

  const Apiurl = ` https://apis.ccbp.in/videos/all?search=${input}`
  const [apiDetails, setApiDetails] = useState({
    apiStatus: apiStatusConstants.initial,
    responseData: null,
    errorMsg: null,
  })

  useEffect(() => {
    gettingViedos()
  }, [])

  const gettingViedos = async () => {
    setApiDetails({
      apiStatus: apiStatusConstants.inProgress,
      responseData: null,
      errorMsg: null,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(Apiurl, options)
    const fetcheddata = await response.json()
    const data = fetcheddata.videos
    if (response.ok) {
      const formatedData = data.map(each => ({
        id: each.id,
        viedoTitle: each.title,
        thumbnailUrl: each.thumbnail_url,
        channelName: each.channel.name,
        channelProfile: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishDate: each.published_at,
      }))
      setApiDetails(prevApiDetails => ({
        ...prevApiDetails,
        apiStatus: apiStatusConstants.success,
        responseData: formatedData,
      }))
    } else {
      setApiDetails(prevApiDetails => ({
        ...prevApiDetails,
        apiStatus: apiStatusConstants.failure,
        errorMsg: fetcheddata.message,
      }))
    }
  }

  const changeinput = event => {
    setinput(event.target.value)
  }

  const searching = () => {
    gettingViedos()
  }
  const successView = () => {
    const {responseData} = apiDetails
    return (
      <>
        <Sidebar />
        <div className='home1'>
          <img
            className='img1'
            src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            alt='logo'
          />
          <p>Buy Nxt Watch Premium Prepaid plans With UPI</p>
          <button>GET IT NOW</button>
          <br />
          <br />
          <br />
          <br />
          <input type='search' onChange={changeinput} />
          <button onClick={searching}>search button</button>
          <br />
          <br />
          <br />
          <ul>
            {' '}
            {responseData.map(each => (
              <EachItemHome key={each.id} viedodetails={each} />
            ))}
          </ul>
        </div>
      </>
    )
  }
  const failureView = () => {
    return (
      <div>
        <Sidebar />
        <img
          src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          alt='no viedos'
        />
      </div>
    )
  }
  const renderLoadingView = () => (
    <div data-testid='loader'>
      <Loader type='Rings' color='#ffffff' height={80} width={80} />
    </div>
  )
  const renderView = () => {
    // const {apiStatus} = apiDetails
    switch (apiDetails.apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return successView()
      case apiStatusConstants.failure:
        return failureView()
      default:
        return null
    }
  }
  return <div>{renderView()}</div>
}
export default HomeViedos
