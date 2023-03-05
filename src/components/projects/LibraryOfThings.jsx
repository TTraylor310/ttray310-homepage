import { useState } from 'react'
import Modal from 'react-modal'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'

Modal.setAppElement('#root')
const customStyles = {
  content: {
    width: '60%',
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

// const AutoplaySlider = withAutoplay(AwesomeSlider);

const LibraryOfThings = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <div id='library-of-things'>
      <div className='max-w-md'>
        <img
          src='../images/projects/library-of-things/landing-page.png'
          alt='Library of Things website pictures'
          onClick={openModal}
        />
        <p className='text-center'>Library of Things</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className='min-h-full'>
          <button onClick={closeModal}>X</button>
          <h3 className='text-center'>Library of Things</h3>
          <AwesomeSlider>
            <div data-src='../images/projects/library-of-things/landing-page.png' />
            <div data-src='../images/projects/library-of-things/profile-page.png' />
            <div data-src='../images/projects/library-of-things/browsing-page.png' />
          </AwesomeSlider>
          <p className='pt-10'>Find items in your community from real people. Share your own items that you think someone else may find useful. Use it to share your interests and meet new people.</p>

        </div>
      </Modal>

    </div>
  )
}
export default LibraryOfThings
