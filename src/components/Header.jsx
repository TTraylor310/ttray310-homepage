import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <Link to={'/'}>
        <span className='text-orange-500 font-bold'>Home</span>
      </Link>
      <Link to={'/work-history'}>
        <span className='text-cyan-900 font-bold'>Work History</span>
      </Link>
    </div>
  )
}

export default Header
