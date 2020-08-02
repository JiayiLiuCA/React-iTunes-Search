import React from 'react'

const ItemModalMetadata = ({modalItem}) => {
    return (
        <div className="modal-metadata">
            {/*Metadata: collectionName, artistName, Genre, ReleaseYear*/}
            <h1 style={{ fontFamily: 'Lato,sans-serif' }}>{modalItem.collectionName}</h1>
            <br />

            {/*split using Regex*/}
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
    )
}

export default ItemModalMetadata
