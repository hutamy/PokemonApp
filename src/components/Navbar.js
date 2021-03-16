import { Link } from "react-router-dom"

export default function Navbar () {

  return (
    <header>
      <div className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div>
              <span className="sr-only">Pokemon</span>
              <Link to="/">
                <img className="h-8 w-auto sm:h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png" alt=""/>
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link data-testid="navbar-my-pokemon" to="/my-pokemon-list">
              <p className="text-base font-medium text-gray-500 hover:text-gray-900">
                My Pokemon List
              </p>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}