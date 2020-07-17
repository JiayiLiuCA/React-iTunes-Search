import React from 'react'

const Item = ({item}) => {
    //console.log(item.artistName);
    const artwork = item.artworkUrl60.slice(0,-11).concat("170x170bb.jpg")
    return (
        <div>
            <img src={artwork} alt="Artwork" />
        </div>
    )
}

export default Item
