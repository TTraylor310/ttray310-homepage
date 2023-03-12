import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex pr-5 space-x-8 text-2xl items-center'>
      <Link to={'/'}>
        <span className='text-orange-500 font-bold'>Home</span>
      </Link>
      {/* <Link to={'/work-history'}> */}
        <span className='text-green-400 font-bold'>Work History</span>
      {/* </Link> */}
    </div>
  )
}

export default Header
