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
};

const TicketTracker = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <div id='ticket-tracker' className='project-ind'>
      <div className='max-w-md'>
        <img
          src='../images/projects/ticket-tracker/tracking-home.png'
          alt='Ticket Tracker website pictures'
          onClick={openModal}
        />
        <p className='text-center'>Ticket Tracker</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className=''>
          <button onClick={closeModal}>X</button>
          <h3 className='text-center'>Ticket Tracker</h3>

          <Swiper
            slidesPerView={1}
            spaceBetween={90}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
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
                src='../images/projects/ticket-tracker/tracking-home.png'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='../images/projects/ticket-tracker/ticket-new.png'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='../images/projects/ticket-tracker/my-tickets.png'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='../images/projects/ticket-tracker/ticket-details.png'
                alt=''
              />
            </SwiperSlide>
          </Swiper>

          <p className='pt-10'>
            Application framework to allow for user to create profile, create
            help tickets for specific hardware, and provides notes for each
            item.
          </p>
        </div>
      </Modal>
    </div>
  )
}
export default TicketTracker
