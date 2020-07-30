import React from 'react'
import appleMusicBadge from '../img/apple-music-badge.svg'
import iTunesMusicBadge from '../img/itunes-music-badge.svg'

const ItemModalLink = ({ url }) => {
    return (
        <div className="modal-external-link">
            <a href={url}
                style={{
                    background: `url(${appleMusicBadge})`,
                    width: '158px',
                    height: '45px'
                }}
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
            <a href={`itms${url.slice(5)}&app=itunes`}
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
    )
}

export default ItemModalLink
