import { BsFillBootstrapFill } from 'react-icons/bs'
import { FaCss3Alt, FaHtml5, FaReact, FaSass, FaNodeJs } from 'react-icons/fa'
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiSqlite,
  SiTailwindcss,
} from 'react-icons/si'

const Skills2 = () => {
  return (
    <div className='mt-10 mb-5 pt-5 pb-14 text-white bg-lighterBlack'>

      <header id='skills' className='text-center pb-3'>
        Skills
      </header>

        <div className='flex justify-center flex-wrap'>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <SiJavascript />
            </div>
            <div id='name' className='text-sm'>
              JavaScript
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <FaHtml5 />
            </div>
            <div id='name' className='text-sm'>
              HTML 5
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <FaCss3Alt />
            </div>
            <div id='name' className='text-sm'>
              CSS 3
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <SiTailwindcss />
            </div>
            <div id='name' className='text-sm'>
              TailwindCSS
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <BsFillBootstrapFill />
            </div>
            <div id='name' className='text-sm'>
              Bootstrap
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <FaSass />
            </div>
            <div id='name' className='text-sm'>
              Sass
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <FaReact />
            </div>
            <div id='name' className='text-sm'>
              React
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <SiRedux />
            </div>
            <div id='name' className='text-sm'>
              Redux
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <FaNodeJs />
            </div>
            <div id='name' className='text-sm'>
              NodeJS
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <SiExpress />
            </div>
            <div id='name' className='text-sm'>
              Express
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <SiPostgresql />
            </div>
            <div id='name' className='text-sm'>
              PostgreSQL
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <SiMongodb />
            </div>
            <div id='name' className='text-sm'>
              MongoDB
            </div>
          </div>

          <div className='skill-container'>
            <div id='icon' className='skill-icon'>
              <SiSqlite />
            </div>
            <div id='name' className='text-sm'>
              Sqlite
            </div>
          </div>

      </div>
    </div>
  )
}
export default Skills2
