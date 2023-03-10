import LibraryOfThings from './projects/LibraryOfThings'
import TicketTracker from './projects/TicketTracker'
import Discoverware from './projects/Discoverware'
import GithubFinder from './projects/GithubFinder'
import SchoolHouseTalk from './projects/SchoolHouseTalk'
import TailwindcssRemake from './projects/TailwindcssRemake'
import MoodGen from './projects/MoodGen'

const PastProjects = () => {
  return (
    <div id='past-projects-container' className='p-15'>
      <h3 className='text-center text-3xl py-8'>Past Projects</h3>
      <div className='flex flex-wrap justify-center p-4 space-x-5'>
        <LibraryOfThings />
        <TicketTracker />
        <Discoverware />
        <GithubFinder />
        <SchoolHouseTalk />
        <TailwindcssRemake />
        <MoodGen />
      </div>
    </div>
  )
}
export default PastProjects
