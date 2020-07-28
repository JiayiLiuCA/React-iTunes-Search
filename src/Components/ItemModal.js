import ReactModal from 'react-modal'

import React from 'react'

// fix appElement warning
// https://github.com/reactjs/react-modal/issues/576

ReactModal.setAppElement('body');

const ItemModal = ({ isOpen, handleOverlayClick, modalItem}) => {

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
            {/*check if modalItem is undefined first*/}
            {modalItem && <div>{modalItem.artistId}</div>}
            </ReactModal>
        </div>
    )
}


export default ItemModal
