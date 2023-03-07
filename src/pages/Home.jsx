// import { Link } from 'react-router-dom'
import PastProjects from '../components/PastProjects'
import Skills from '../components/Skills'
import Skills2 from '../components/Skills2'
import WhoAmI from '../components/WhoAmI'


const Home = () => {
  return (
    <div>
      <WhoAmI />
      {/* <Skills /> */}
      <Skills2 />
      <PastProjects />
    </div>
  )
}
export default Home