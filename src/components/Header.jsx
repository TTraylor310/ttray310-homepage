import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>Header</div>
      <Link to={'/'}>
        Check To Home!
      </Link>
      <Link to={'/work-history'}>
        <span className='text-cyan-900 font-bold'>
          GOTO work-history
        </span>
      </Link>
    </div>
      
  )
}

export default Header
