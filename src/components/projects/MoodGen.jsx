import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'

import { useRef, useState } from 'react'
import Modal from 'react-modal'

import '../../index.css'

Modal.setAppElement('#root')
const customStyles = {
  content: {
    width: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const MoodGen = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <div id='mood-gen' className='project-ind'>
      <div className='max-w-md'>
        <img
          src='../images/projects/mood-gen/mood-gen-homepage.png'
          alt='Mood website pictures'
          onClick={openModal}
        />
        <p className='text-center'>Mood Generator</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className=''>
          <button onClick={closeModal}>X</button>
          <h3 className='text-center'>Mood Generator</h3>

          <Swiper
            slidesPerView={1}
            spaceBetween={90}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img
                src='../images/projects/mood-gen/mood-gen-homepage.png'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='../images/projects/mood-gen/mood-gen-results.png'
                alt=''
              />
            </SwiperSlide>
          </Swiper>

          <p className='pt-10'>
            Project with form to suggest Music, Movies, and Links to additional
            resources.
          </p>
        </div>
      </Modal>
    </div>
  )
}
export default MoodGen
