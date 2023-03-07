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

const GithubFinder = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <div id='github-finder' className='project-ind'>
      <div className='max-w-md'>
        <img
          src='../images/projects/github-finder/landing-page.png'
          alt='Github Finder website pictures'
          onClick={openModal}
        />
        <p className='text-center'>GithubFinder</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className=''>
          <button onClick={closeModal}>X</button>
          <h3 className='text-center'>GithubFinder</h3>

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
                src='../images/projects/github-finder/landing-page.png'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='../images/projects/github-finder/profile-page.png'
                alt=''
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src='../images/projects/github-finder/search-results.png'
                alt=''
              />
            </SwiperSlide>
          </Swiper>

          <p className='pt-10'>
            Github Profile search engine and allows for profile information
          </p>
        </div>
      </Modal>
    </div>
  )
}

export default GithubFinder
