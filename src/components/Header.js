import { useEffect } from 'react'

function Header(props) {
  const { searchBox, setSearchBox } = props

  return (
    <header className="w-full flex flex-col gap-8">
      <div className="text-white flex justify-between">
        <h1 className="font-medium text-2xl">devfinder</h1>
        <button>LIGHT</button>
      </div>
      <form
        className="bg-dmBgContent flex justify-between items-center max-h-[70px] min-h-[60px] pr-[10px] rounded-xl"
        // onSubmit={}
      >
        <input
          className="w-full max-w-[600px] mx-[42px] bg-dmBgContent text-white"
          placeholder="Search GitHub username..."
          type="text"
          value={searchBox}
          onChange={(e) => {
            setSearchBox(e.target.value)
          }}
        />
        <button
          className="bg-dmSearchBtn text-white max-w-[107px] max-h-[50px] min-h-[46px] min-w-[83px] rounded-lg font-medium"
          type="submit"
        >
          Search
        </button>
      </form>
    </header>
  )
}

export default Header
