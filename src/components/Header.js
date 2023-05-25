function Header() {
  return (
    <header className="w-full">
      <div className="text-white flex justify-between">
        <h1>devfinder</h1>
        <button>LIGHT</button>
      </div>
      <form className="bg-dmBgContent flex justify-between">
        <input
          className="w-full max-w-[600px] mx-[42px] bg-dmBgContent"
          placeholder="Search GitHub username..."
        />
        <button className="bg-dmSearchBtn text-white">Search</button>
      </form>
    </header>
  )
}

export default Header
