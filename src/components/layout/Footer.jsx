import { FaAt, FaEnvelopeOpenText, FaGlobe } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  const date = new Date().getFullYear()
  return (
    <div className='px-2 py-20 border-b-yellow-500 border-b-4 relative'>
      <div className='container mx-auto flex flex-col center items-center content-center text-center'>
        <img src='/pokepicker.png' alt='Poképicker logo' />
        <p className='text-gray-400 mt-1'>
          <strong>Design and build</strong> by <strong>Ben Singer</strong>{' '}
          {date}
        </p>
        <ul className='social-icons w-1/6 flex flex-row justify-around text-5xl mt-4'>
          <a
            aria-label='visit my portolio site'
            target='_blank'
            rel='noreferrer'
            href='https://bensinger.me'
            className='text-blue-600 hover:text-yellow-300 focus:text-yellow-300 hover:drop-shadow-sm focus:drop-shadow-sm shadow-blue-900 transition-colors'
          >
            <FaGlobe />
          </a>
          <a
            aria-label='get in touch via email'
            target='_blank'
            rel='noreferrer'
            href='mailto:hello@bensinger.me'
            className='ml-3 text-blue-600 hover:text-yellow-300 focus:text-yellow-300 hover:drop-shadow-sm focus:drop-shadow-sm shadow-blue-900 transition-colors'
          >
            <FaAt />
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Footer
