import {useSelector} from 'react-redux'
import SaveViedoItem from '../SaveViedoItem'
import Sidebar from '../Sidebar'
import './index.css'

const SaveViedos = () => {
  const savedList = useSelector(state => state.save.saveList)

  //console.log(savedList)

  return (
    <div>
      <Sidebar />
      <div className='save-container'>
        <h1>Save Viedos</h1>
        <ul className='cryptocurrencies-list'>
          {savedList.map(each => (
            <SaveViedoItem key={each.id} viedodetails={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SaveViedos
