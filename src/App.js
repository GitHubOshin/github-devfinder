import axios from 'axios'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import UserProfile from './components/UserProfile'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    setIsLoading(true)
    const data = await axios.request('https://api.github.com/users/octocat')
    setUserInfo(data.data)
    setIsLoading(false)
  }

  if (isLoading === true) {
    console.log('Loading...')
  } else {
    console.log('Finished')
  }

  console.log(userInfo)
  return (
    <div className="bg-dm h-screen flex flex-col gap-3">
      <Header />
      <UserProfile />
    </div>
  )
}

export default App
