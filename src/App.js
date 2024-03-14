import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TrendingViedos from './components/TrendingViedos'
import GamingViedos from './components/GamingViedos'
import SaveViedos from './components/SaveViedos'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginForm'
import SingleItemTrending from './components/SingleItemTrending'
import SingleItemGaming from './components/SingleItemGaming'
import HomeViedos from './components/HomeViedos'
import SingleItemsaveViedo from './components/SingleItemsaveViedo'
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/trending'
        element={
          <ProtectedRoute>
            <TrendingViedos />
          </ProtectedRoute>
        }
      />
      <Route path='/login' element={<LoginForm />} />

      <Route
        path='/'
        element={
          <ProtectedRoute>
            <HomeViedos />
          </ProtectedRoute>
        }
      />
      <Route
        path='/Gameing'
        element={
          <ProtectedRoute>
            <GamingViedos />
          </ProtectedRoute>
        }
      />
      <Route
        path='/SaveViedos'
        element={
          <ProtectedRoute>
            <SaveViedos />
          </ProtectedRoute>
        }
      />

      <Route
        path='/trending/:id'
        element={
          <ProtectedRoute>
            <SingleItemTrending />
          </ProtectedRoute>
        }
      />
      <Route
        path='/Gaming/:id'
        element={
          <ProtectedRoute>
            <SingleItemGaming />
          </ProtectedRoute>
        }
      />
      <Route
        path='/saveViedos/:id'
        element={
          <ProtectedRoute>
            <SingleItemsaveViedo />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
)
export default App
