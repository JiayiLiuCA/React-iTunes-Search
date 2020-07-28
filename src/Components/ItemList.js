import React, { useState } from 'react'
import Item from './Item'
import '../Styles/ItemList.css'
import ItemModal from './ItemModal'



const ItemList = ({ items }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalItem, setModalItem] = useState()

    const handleItemClick = item => {
        console.log(item)
        setModalIsOpen(true)
        setModalItem(item)
    }

    const handleOverlayClick = () => {
        //console.log("overlayClick")
        setModalIsOpen(false)
    }

    return (
        <div className="items-container">
            <div className="itemlist">
                {items.map(item => (
                    <Item item={item} key={item.collectionId} handleItemClick={handleItemClick} />
                ))}
            </div>
            <ItemModal
                isOpen={modalIsOpen}
                modalItem={modalItem}
                handleOverlayClick={handleOverlayClick}
            />
        </div>
    )
}

export default ItemList
