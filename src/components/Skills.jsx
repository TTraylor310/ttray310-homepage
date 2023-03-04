import { BsFillBootstrapFill } from 'react-icons/bs'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'
import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiNetlify,
  SiHeroku,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiSupabase
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
          <BsFillBootstrapFill />
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

      <div
        id='tools-platforms-container'
        className='text-5xl font-style: italic'
      >
        Tools and Platforms
        <div id='tools-platforms-individual' className='text-4xl flex'>
          <FaGithub />
          <SiNetlify />
          <SiHeroku />
        </div>
      </div>

      <div id='database-container' className='text-5xl font-style: italic'>
        Database
        <div id='database-individual' className='text-4xl flex'>
          <SiPostgresql />
          <SiMongodb />
          <SiSqlite />
        </div>
      </div>
    </div>
  )
}

export default Skills
