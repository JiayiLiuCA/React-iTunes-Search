import ReactModal from 'react-modal'
import React from 'react'

import '../Styles/ItemModal.css'

import ItemModalMetadata from './ItemModalMetadata'
import ItemModalLink from './ItemModalLink'

// fix appElement warning
// https://github.com/reactjs/react-modal/issues/576
ReactModal.setAppElement('body');

const ItemModal = ({ isOpen, handleOverlayClick, modalItem }) => {

    return (
        <div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => handleOverlayClick()}
                //className for content style only
                className="item-modal"
                //inline style for overlay styling
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.65)',
                    },
                }}
            >
                {/*check if modalItem is undefined first*/}
                {modalItem &&
                    <div className="modal-container">
                        {/*400*400 artwork*/}
                        <div className="modal-item-img">
                            <img
                                src={modalItem.artworkUrl60.slice(0, -11).concat("400x400bb.jpg")}
                                alt="artwork"
                            />
                        </div>
                        {/*Item data*/}
                        <div className="modal-item-data">
                            <ItemModalMetadata modalItem={modalItem} />
                            <ItemModalLink url={modalItem.collectionViewUrl} />
                        </div>
                    </div>
                }
            </ReactModal>
        </div>
    )
}


export default ItemModal
