import ReactModal from 'react-modal'

import React from 'react'

const ItemModal = ({ isOpen, handleOverlayClick}) => {

    return (
        <div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => handleOverlayClick()}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.6)'
                    },
                    content: {
                        top: '0px',
                        width: '50vmin',
                        height: '50vmin',
                        minWidth: '600px',
                        minHeight: '600px',
                        
                    }
                }}
            >
                <p>modal</p>
            </ReactModal>
        </div>
    )
}

export default ItemModal
