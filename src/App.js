import axios from 'axios'
import { useState, useCallback, useEffect } from 'react'
import Header from './components/Header'
import UserProfile from './components/UserProfile'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  const [searchBox, setSearchBox] = useState('')

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
    <div className="bg-dm h-screen min-w-[350px] flex justify-center items-center font-robotoMono">
      <div className="flex w-full flex-col gap-6 max-w-[730px] min-w-[327px]">
        <Header
          searchBox={searchBox}
          setSearchBox={setSearchBox}
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
    </div>
  )
}

export default App
