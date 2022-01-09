function Footer() {
  const date = new Date().getFullYear()
  return (
    <div className='bg-gray-900 py-5 text-center text-white font-bold'>
      SDS PokéPicker App {date}
    </div>
  )
}

export default Footer
