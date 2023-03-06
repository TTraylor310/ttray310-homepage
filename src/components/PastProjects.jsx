import LibraryOfThings from './projects/LibraryOfThings'
import TicketTracker from './projects/TicketTracker'


const PastProjects = () => {

  return (
    <div id='past-projects-container' className='p-15'>
      
      <h3 className='text-center text-3xl py-8'>Past Projects</h3>
      <div className="flex p-4 space-x-5">
        <LibraryOfThings />
        <TicketTracker />
      </div>
    </div>
  )
}
export default PastProjects
