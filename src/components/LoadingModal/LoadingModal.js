import React from 'react'
import { PropTypes } from 'prop-types'
import ReactLoading from 'react-loading'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#515151'
  }
}

const LoadingModal = ({ isLoading }) => (
  isLoading
  ? <Modal isOpen={isLoading} style={customStyles} ariaHideApp={false}>
      <ReactLoading type="spin" />
    </Modal>
  : null
)

LoadingModal.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default LoadingModal
