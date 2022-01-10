function About() {
  return (
    <>
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
            About
            <br />
            PokéPicker
          </div>
          <div className='max-w-xl'>
            <h1 className='text-5xl drop-shadow-xl md:text-5xl font-bold mb-2 text-white'>
              About PokéPicker {'\u2728'}
            </h1>
            <p className='text-2xl mb-1 leading-tight max-w-screen-md drop-shadow-xl font-bold md:text-3xl text-yellow-400'>
              PokéPicker is an app to discover more about all 151 original
              Pokémon. Filterable by name - each even has their own page.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
