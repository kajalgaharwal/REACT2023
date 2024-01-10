
import './App.css'
import Profile from './components/Profile'
import Login from './components/login'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
