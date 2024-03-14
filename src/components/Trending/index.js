import Sidebar from '../Sidebar'
import './index.css'
import EachItemTrending from '../EachItemTrending'
const Trending = props => {
  const {viedodata} = props
  return (
    <>
      <Sidebar />
      <div className='trending'>
        <h1>Trending</h1>

        <ul className='cryptocurrencies-list'>
          {viedodata.map(each => (
            <EachItemTrending key={each.id} viedodetails={each} />
          ))}
        </ul>
      </div>
    </>
  )
}
export default Trending
