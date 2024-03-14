import Sidebar from '../Sidebar'
import './index.css'
import EachItemGameing from '../EachItemGameing'
const Gameing = props => {
  const {viedodata} = props

  return (
    <>
      <Sidebar />
      <div className='gaming'>
        <h1>Gaming</h1>
        <ul className='cryptocurrencies-list'>
          {viedodata.map(each => (
            <EachItemGameing key={each.id} viedodetails={each} />
          ))}
        </ul>
      </div>
    </>
  )
}
export default Gameing
