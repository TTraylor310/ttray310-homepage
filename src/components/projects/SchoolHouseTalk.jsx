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

const SchoolHouseTalk = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <div id='school-house-talk' className='project-ind'>
      <div className='max-w-md'>
        <img
          src='../images/projects/school-house-talk/psql-server-updated.png'
          alt='Github Finder website pictures'
          onClick={openModal}
        />
        <p className='text-center'>School House Talk</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className=''>
          <button onClick={closeModal}>X</button>
          <h3 className='text-center'>School House Talk</h3>

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
                src='../images/projects/school-house-talk/psql-server-updated.png'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='../images/projects/school-house-talk/psql-server-and-table.png'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='../images/projects/school-house-talk/sockets-connected-starting.png'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='../images/projects/school-house-talk/sockets-connected-sports-joined.png'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='../images/projects/school-house-talk/sockets-connected-deleteEvent.png'
                alt=''
              />
            </SwiperSlide>
          </Swiper>

          <p className='pt-10'>
            School House Talk will act as a single source of truth for
            communication and information about school activities and events
            between faculty and parents. Coach and Admin have access to create
            new events, modify existing ones, and delete an event all together.
          </p>
        </div>
      </Modal>
    </div>
  )
}
export default SchoolHouseTalk
