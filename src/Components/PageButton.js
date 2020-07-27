import React from 'react'
import '../Styles/PageButton.css'

const PageButton = ({page,nextPage, prevPage}) => {
    return (
        <div className="page-button">
            <button onClick={()=>prevPage()}> {String.fromCharCode(60)} </button>
            {page}
            <button onClick={()=>nextPage()}> {String.fromCharCode(62)} </button>
        </div>
    )
}

export default PageButton
