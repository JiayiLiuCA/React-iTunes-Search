import ReactModal from 'react-modal'
import React from 'react'

import '../Styles/ItemModal.css'

import appleMusicBadge from '../img/apple-music-badge.svg'
import iTunesMusicBadge from '../img/itunes-music-badge.svg'

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
                        top: '-100px',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        height: '500px',
                        width: '80vw',
                        minWidth: '800px',
                        maxWidth: '1100px',
                        backgroundColor: 'rgba(225,225,225,.95)',
                        alignItems: 'center',
                        paddingTop: '50px',
                        paddingBottom: '50px',
                        paddingLeft: '0px',
                        paddingRight: '0px'
                    }
                }}
            >
                {/*check if modalItem is undefined first*/}
                {modalItem &&
                    <div className="modal-container">
                        <div className="modal-item-img">
                            <img
                                src={modalItem.artworkUrl60.slice(0, -11).concat("400x400bb.jpg")}
                                alt="artwork"
                            />
                        </div>
                        <div className="modal-item-data">
                            <div className="modal-item-metadata">
                                <h1 style={{ fontFamily: 'Lato,sans-serif' }}>{modalItem.collectionName}</h1>
                                <br />
                                <br />
                                {/*https://stackoverflow.com/a/650031/5228093*/}
                                {modalItem.artistName.split(/ & |, /).map(artist => (
                                    <p style={{ fontFamily: 'Ubuntu,sans-serif', fontSize: '18px', }} key={artist}>
                                        {artist}
                                    </p>
                                ))}
                                <br />
                                <h4 style={{ color: 'rgb(80,80,80)' }}>
                                    {modalItem.primaryGenreName + ' · ' + modalItem.releaseDate.slice(0, 4)}
                                </h4>
                            </div>
                            <div className="modal-external-link">
                                {/*External links to apple*/}
                                <a href={modalItem.collectionViewUrl}
                                    style={{
                                        background: `url(${appleMusicBadge})`,
                                        width: '158px',
                                        height: '45px'
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                </a>
                                <a href={`itms${modalItem.collectionViewUrl.slice(5)}&app=itunes`}
                                    style={{
                                        background: `url(${iTunesMusicBadge})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        width: '158px',
                                        height: '45px'
                                    }}
                                >
                                </a>

                            </div>
                        </div>
                    </div>
                }
            </ReactModal>
        </div>
    )
}


export default ItemModal
