import React from 'react'
import '../Styles/Item.css'

const Item = ({ item, handleItemClick }) => {
    //console.log(item.artistName);
    //Cut off "60x60bb.jpg"
    const artwork = item.artworkUrl60.slice(0, -11).concat("170x170bb.jpg")
    return (
        <button className="item" onClick={() => handleItemClick(item)}> {/*Pass item to itemList then to Modal*/}
            <img src={artwork} alt="Artwork" />
            <div className="item-metadata">
                <p className="item-metadata-collection-name">
                    {item.collectionName}
                </p>
                <p className="item-metadata-artist-name">
                    {item.artistName}
                </p>
            </div>
        </button>
    )
}

export default Item
