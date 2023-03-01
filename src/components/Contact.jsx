import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')
const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div>
      <button onClick={openModal} className="text-3xl font-sans">
        Contact Me
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Add Note'
      >

        <h2>Contact Me about working together</h2>
        <button onClick={closeModal} className='bg-gray-500'>X</button>
        <form>
          <div className='form-email'>
            <label htmlFor='email'>Contact Email</label>
            <textarea
              name='email'
              id='email'
              placeholder='Please enter a valid email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></textarea>
          </div>
          <div className='form-description'>
            <label htmlFor='description'>What can we work on together?</label>
            <textarea
              name='description'
              id='description'
              placeholder='Description of project or idea'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </form>

      </Modal>

    </div>
  )
}

export default Contact