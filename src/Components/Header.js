{/* not used atm */}

export const Header = () => {
    return (
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-xl font-semibold">GroupMate </div>

          
  
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Make Teams!</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;