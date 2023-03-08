import {IoSchoolSharp} from 'react-icons/io5'
import {GiElectric} from 'react-icons/gi'
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
          contentStyle={{background: '#AEDEAD', color: '#fff'}}
          contentArrowStyle={{ borderRight: '7px solid  #AEDEAD' }}
          date='June 2022 - November 2022'
          iconStyle={{ background: '#AEDEAD', color: '#fff' }}
          icon={<IoSchoolSharp />}
        >
          <h3 className='vertical-timeline-element-title'>Software Developer</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Seattle, WA
          </h4>
          <p>Advanced Software Development in Full-Stack JavaScript</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          // className='vertical-timeline-element--work'
          contentStyle={{ background: '#2196F3', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #2196F3' }}
          date='2011 - present'
          iconStyle={{ background: '#2196F3', color: '#fff' }}
          icon={<GiElectric />}
        >
          <h3 className='vertical-timeline-element-title'>Lead Industrial Maintenance Instrumentation</h3>
          <h3>& Electrical Technician</h3>
          <h4 className='vertical-timeline-element-subtitle'>Seattle, WA</h4>
          <ul>
            <li>Supervised 12 expert technicians in day-to-day maintenance and prioritization of critical plant repairs, complex project development between plant staff and multiple contractors to facilitate direction, development, and deconfliction.</li>
            <li>Provided technical analysis input to a wide variety of renovation and new construction projects ranging from minor upgrades of software to fundamental system design retrofit with budgets totaling over $100 million.</li>
          </ul>
        </VerticalTimelineElement>


        {/* <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2010 - 2011'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Art Director</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement> */}


        {/* <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2008 - 2010'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Web Designer</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement> */}





        {/* <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='April 2013'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement> */}


        {/* <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='November 2012'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Agile Development Scrum Master
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement> */}


        {/* <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2002 - 2006'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement> */}


        {/* <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        /> */}


      </VerticalTimeline>
    </>
  )
}
export default WorkHistory
