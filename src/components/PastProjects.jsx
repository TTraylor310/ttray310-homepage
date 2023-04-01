import LibraryOfThings from './projects/LibraryOfThings'
import TicketTracker from './projects/TicketTracker'
import Discoverware from './projects/Discoverware'
import GithubFinder from './projects/GithubFinder'
import SchoolHouseTalk from './projects/SchoolHouseTalk'
import TailwindcssRemake from './projects/TailwindcssRemake'
import MoodGen from './projects/MoodGen'

const PastProjects = () => {

  // expand on each card to include the languages used and icon
  // also check the details for each card..
  // add styling for hover on the projects and reactions
  // and think or ways to style the page so comments on side
  // cross over and remember to write json data for reuse

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
