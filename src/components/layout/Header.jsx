import { Link } from 'react-router-dom'
function Header() {
  return (
    <header
      className='px-2 py-4 border-b-yellow-500 border-b-4 relative z-10'
      style={{ backgroundColor: '#f9d53e' }}
    >
      <div className='container flex justify-between align-middle mx-auto'>
        <Link className='flex items-center pr-2' to='/'>
          <img
            className='inline-block'
            src='/pokepicker.png'
            style={{ width: '160px', maxWidth: '100%', height: 'auto' }}
            alt='PokéPicker App Icon'
          />
        </Link>
        <nav className='flex h-100'>
          <Link
            className=' bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-2'
            to='/'
          >
            Home
          </Link>
          <Link
            className=' bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            to='/about'
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
