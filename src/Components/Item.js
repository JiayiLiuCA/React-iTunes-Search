import React from 'react'

const Item = ({item}) => {
    console.log(item.artistName);
    return (
        <div>
            <img src={item.artworkUrl100} alt="Artwork" />
        </div>
    )
}

export default Item
