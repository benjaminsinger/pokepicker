import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero overflow-hidden relative py-10 lg:py-14 px-5 bg-blue-500'>
      <div className='container mx-auto'>
        <div
          className='select-none'
          aria-hidden='true'
          style={{
            fontSize: `25em`,
            position: `absolute`,
            color: `#3778e3`,
            fontWeight: `bold`,
            transform: `rotate(351deg)`,
            top: `-0.5em`,
            left: `-0.15em`,
            lineHeight: `.8`,
          }}
        >
          Scene
          <br />
          Missing
        </div>
        <div className='max-w-xl'>
          <h1 className='text-5xl drop-shadow-xl md:text-5xl font-bold mb-2 text-white'>
            A Missing Page Appeared! {'\u2728'}
          </h1>
          <p className='text-2xl mb-1 leading-tight max-w-screen-md drop-shadow-xl font-bold md:text-3xl text-yellow-400 mt-5'>
            Click below to safely travel back home
          </p>
          <Link
            to={`/`}
            className='relative transition-colors mt-5 inline-block md:text-2xl bg-yellow-400 hover:bg-yellow-400 text-blue-700 font-bold py-3 px-4 border-b-4 border-yellow-600 hover:border-yellow-500 rounded'
          >
            Escape to safety!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
