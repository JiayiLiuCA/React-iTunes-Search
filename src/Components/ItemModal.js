import ReactModal from 'react-modal'
import React from 'react'

import '../Styles/ItemModal.css'

// fix appElement warning
// https://github.com/reactjs/react-modal/issues/576
ReactModal.setAppElement('body');


const ItemModal = ({ isOpen, handleOverlayClick, modalItem }) => {

    return (
        <div>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => handleOverlayClick()}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.65)',
                    },
                    content: {
                        top: '0',
                        height: '500px',
                        width: '75vw',
                        minWidth: '500px',
                        maxWidth: '1000px',
                        backgroundColor: 'rgba(225,225,225,.95)',
                        padding: '50px',
                    }
                }}
            >
                {/*check if modalItem is undefined first*/}
                {modalItem &&
                    <div className="modal-container">
                        <img src={modalItem.artworkUrl60.slice(0, -11).concat("400x400bb.jpg")} alt="artwork" />
                        <div className="modal-item-data">
                            <div className="modal-item-metadata">
                                <h1 style={{ fontFamily: 'Lato,sans-serif' }}>{modalItem.collectionName}</h1>
                                <br />
                                <br />
                                {/*https://stackoverflow.com/a/650031/5228093*/}
                                {modalItem.artistName.split(/ & |, /).map(artist => (
                                    <p style={{
                                        fontFamily: 'Ubuntu,sans-serif',
                                        fontSize: '20px',
                                    }}
                                        key={artist}
                                    >
                                        {artist}
                                    </p>
                                ))}

                                <br />
                                <h4 style={{ color: 'rgb(80,80,80)' }}>
                                    {modalItem.primaryGenreName + ' · ' + modalItem.releaseDate.slice(0, 4)}
                                </h4>
                            </div>
                            <div className="modal-external-link">
                                Link1
                                Link2
                            </div>
                        </div>
                    </div>}
            </ReactModal>
        </div>
    )
}


export default ItemModal
