import { IoSchoolSharp } from 'react-icons/io5'
import { GiElectric } from 'react-icons/gi'
import { MdAnchor } from 'react-icons/md'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const WorkHistory = () => {
  return (
    <>
      <VerticalTimeline layout='2-columns' lineColor='#2D61DD'>

        <VerticalTimelineElement
          // className='vertical-timeline-element--work'
          position={'right'}
          contentStyle={{ background: '#fff', color: '#000000' }}
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          date='June 2022 - November 2022'
          iconStyle={{ background: '#AEDEAD', color: '#fff' }}
          icon={<IoSchoolSharp />}
        >
          <h3 className='vertical-timeline-element-title text-gray-600'>
            Software Developer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Seattle, WA</h4>
          <p>Advanced Software Development in Full-Stack JavaScript</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          // className='vertical-timeline-element--work'
          position={'right'}
          contentStyle={{ background: '#2196F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #2196F3' }}
          date='June 2017 - December 2021'
          iconStyle={{ background: '#2196F3', color: '#fff' }}
          icon={<GiElectric />}
        >
          <h3 className='vertical-timeline-element-title'>
            Lead Industrial Maintenance Instrumentation
          </h3>
          <h3>& Electrical Technician</h3>
          <h4 className='vertical-timeline-element-subtitle'>Seattle, WA</h4>
          <ul>
            <li>
              Supervised 12 expert technicians in day-to-day maintenance and
              prioritization of critical plant repairs, complex project
              development between plant staff and multiple contractors to
              facilitate direction, development, and deconfliction.
            </li>
            <li>
              Provided technical analysis input to a wide variety of renovation
              and new construction projects ranging from minor upgrades of
              software to fundamental system design retrofit with budgets
              totaling over $100 million.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          // className='vertical-timeline-element--work'
          position='left'
          contentStyle={{ background: '#2196F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #2196F3' }}
          date='November 2004 - April 2017'
          iconStyle={{ background: '#2196F3', color: '#fff' }}
          icon={<MdAnchor />}
        >
          <h3 className='vertical-timeline-element-title' >
            Electrical Division Leading Chief Petty Officer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Silverdale, WA</h4>
          <p>
            <ul>
              <li>
                Trained, managed, planned, and organized 15 diverse personnel in
                over 40,000 yearly man/hours of maintenance and repair of
                complex systems that support submarine and nuclear power plant
                operations.
              </li>
              <li>
                Interfaced and collaborated with 13 cross-functional teams and
                external contractors to formulate and plan work flow, time
                management, logistics, and resource management
              </li>
              <li>
                Master Training Specialist: Instructed junior technicians on
                electrical theory, maintenance, and reactor plant systems with a
                99.4% pass rate of over 400 students and 5 instructors
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </>
  )
}
export default WorkHistory
