// import { Link } from 'react-router-dom'
import PastProjects from '../components/PastProjects'
import Skills from '../components/Skills'
import Skills2 from '../components/Skills2'
import WhoAmI from '../components/WhoAmI'
import WorkHistory from '../components/WorkHistory'

// figure out the quick links
// remember to clean up the work history and add shortcut links
const Home = () => {
  return (
    <div>
      <WhoAmI />
      {/* <Skills /> */}
      <Skills2 />
      <PastProjects />
      <WorkHistory />
    </div>
  )
}
export default Home