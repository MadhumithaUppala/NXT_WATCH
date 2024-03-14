import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Gameing from '../Gameing'
import Sidebar from '../Sidebar'
const Apiurl = 'https://apis.ccbp.in/videos/gaming'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
const GamingViedos = () => {
  const [apiDetails, setApiDetails] = useState({
    apiStatus: apiStatusConstants.initial,
    responseData: null,
    errorMsg: null,
  })
  useEffect(() => {
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
          viewCount: each.view_count,
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
    gettingViedos()
  }, [])
  const successView = () => {
    const {responseData} = apiDetails
    return <Gameing viedodata={responseData} />
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
export default GamingViedos
