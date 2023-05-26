import { useEffect, useCallback } from 'react'

function Header(props) {
  const { searchBox, setSearchBox, handleGetUserInfo } = props

  // useEffect(() => {
  //   handleGetUserInfo()
  // }, [handleGetUserInfo])

  // const handleSubmitUsername = useCallback(
  //   async (e) => {
  //     e.preventDefault()
  //     await handleGetUserInfo(searchBox)
  //   },
  //   [handleGetUserInfo, searchBox]
  // )

  return (
    <header className="w-full">
      <div className="text-white flex justify-between">
        <h1>devfinder</h1>
        <button>LIGHT</button>
      </div>
      <form
        className="bg-dmBgContent flex justify-between"
        // onSubmit={handleSubmitUsername}
      >
        <input
          className="w-full max-w-[600px] mx-[42px] bg-dmBgContent"
          placeholder="Search GitHub username..."
          type="text"
          value={searchBox}
          onChange={(e) => {
            setSearchBox(e.target.value)
          }}
        />
        <button className="bg-dmSearchBtn text-white" type="submit">
          Search
        </button>
      </form>
    </header>
  )
}

export default Header
