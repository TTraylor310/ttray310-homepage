import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiNetlify,
  SiHeroku,
} from 'react-icons/si'

const Skills = () => {
  return (
    <div className='px-8 space-y-10'>
      <div id='skills-container' className='text-5xl font-style: italic'>
        Skills
        <div id='skills-individual' className='text-4xl flex'>
          <SiJavascript />
          <FaHtml5 />
          <FaCss3Alt />
          <SiTailwindcss />
        </div>
      </div>

      <div id='lib-frame-container' className='text-5xl font-style: italic'>
        Libraries & Frameworks
        <div id='lib-frame-individual' className='text-4xl flex'>
          <FaReact />
          <SiRedux />
          <FaNodeJs />
          <SiExpress />
        </div>
      </div>

      <div id='tools-platforms' className='text-5xl font-style: italic'>
        Tools and Platforms
        <div id='tools-platforms-individual' className='text-4xl flex'>
          <FaGithub />
          <SiNetlify />
          <SiHeroku />
        </div>
      </div>
    </div>
  )
}

export default Skills