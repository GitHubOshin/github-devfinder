import axios from 'axios'
import { useState, useCallback, useEffect } from 'react'
import Header from './components/Header'
import UserProfile from './components/UserProfile'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [searchBox, setSearchBox] = useState('')

  // const handleGetUserInfo = useCallback(async (username) => {
  //   setIsLoading(true)
  //   const findUser = username ? `${username}` : ''
  //   const data = await axios(`https://api.github.com/users/${findUser}`)
  //   setUserInfo(data.data)
  //   setIsLoading(false)
  // }, [])

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
  console.log(searchBox)
  return (
    <div className="bg-dm h-screen flex flex-col gap-3">
      <Header
        searchBox={searchBox}
        setSearchBox={setSearchBox}
        // handleGetUserInfo={handleGetUserInfo}
      />
      <UserProfile
        profile_pic={userInfo?.avatar_url}
        name={userInfo?.name}
        user_id={userInfo?.login}
        joined={userInfo?.created_at}
        bio={userInfo?.bio}
        repos={userInfo?.public_repos}
        followers={userInfo?.followers}
        following={userInfo?.following}
        location={userInfo?.location}
        twitter={userInfo?.twitter_username}
        company={userInfo?.company}
        blog={userInfo?.blog}
      />
    </div>
  )
}

export default App
