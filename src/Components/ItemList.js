import React, { useState } from 'react'
import Item from './Item'
import '../Styles/ItemList.css'
import ItemModal from './ItemModal'



const ItemList = ({ items }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalItem, setModalItem] = useState()

    //Open modal when item is clicked
    //Pass item as prop to modal
    const handleItemClick = item => {
        setModalIsOpen(true)
        setModalItem(item)
    }

    //Close Modal on overlay click
    const handleOverlayClick = () => {
        setModalIsOpen(false)
    }

    return (
        <div className="items-container">
            {/* Items fetched from iTunes*/}
            <div className="itemlist">
                {items.map(
                    item => (
                        <Item
                            item={item}
                            key={item.collectionId}
                            handleItemClick={handleItemClick}
                        />
                    ))}
            </div>
            {/* React Modal*/}
            <ItemModal
                isOpen={modalIsOpen}
                modalItem={modalItem}
                handleOverlayClick={handleOverlayClick}
            />
        </div>
    )
}

export default ItemList
