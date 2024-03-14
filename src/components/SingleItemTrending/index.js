import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {useParams} from 'react-router-dom'
import React from 'react'
import ReactPlayer from 'react-player'
import {useDispatch} from 'react-redux'
import {AiOutlineLike} from 'react-icons/ai'
import {saveTodo} from '../../reducers/saveSlice'
import {AiTwotoneDislike} from 'react-icons/ai'
import {CiSaveDown2} from 'react-icons/ci'

import './index.css'

import Siderbar from '../Sidebar'
const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
const SingleItemTrending = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  const Apiurl = `https://apis.ccbp.in/videos/${id}`
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
      console.log(fetcheddata)
      const data = fetcheddata.video_details
      if (response.ok) {
        const formatedData = {
          id: data.id,
          viedoTitle: data.title,
          videoUrl: data.video_url,
          thumbnailUrl: data.thumbnail_url,
          channelName: data.channel.name,
          profileImage: data.channel.profile_image_url,
          viewCount: data.view_count,
          publishedAt: data.published_at,
          description: data.description,
          subscriberCount: data.subscriber_count,
        }
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

    const {
      id,
      description,
      publishedAt,
      viedoTitle,
      videoUrl,
      thumbnailUrl,
      channelName,
      profileImage,
      viewCount,
      subscriberCount,
    } = responseData

    const savingviedos = () => {
      dispatch(
        saveTodo({
          id,
          viedoTitle,
          description,
          videoUrl,
          publishedAt,
          channelName,
          profileImage,
          viewCount,
          thumbnailUrl,
        }),
      )
    }
    return (
      <div>
        <Siderbar />
        <div className='video-details-container flex'>
          <div className='single-page'>
            <ReactPlayer className='v' url={videoUrl} />
            <p className='viedo-t'>{viedoTitle}</p>
            <div className='pa'>
              <p className='cou'>
                {viewCount} views &bull; {publishedAt}
              </p>

              <div className='buttons'>
                <span>
                  <AiOutlineLike /> Like
                </span>
                <span>
                  <AiTwotoneDislike />
                  Dislike
                </span>
                <span>
                  {' '}
                  <button type='button' onClick={savingviedos}>
                    <CiSaveDown2 />
                    save
                  </button>
                </span>
              </div>
            </div>
            <div className='channel-description'>
              <div className='channel-icon'></div>
              <div className='channel-details'>
                <h5>{channelName}</h5>
                <p>{subscriberCount}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const failureView = () => {
    return (
      <div>
        <Siderbar />
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
export default SingleItemTrending
