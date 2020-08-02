import React from 'react'
import '../Styles/PageButton.css'

const PageButton = ({ page, nextPage, prevPage }) => {
    return (
        <div className="page-button">
            {/* Page buttons */}
            <button onClick={() => prevPage()}>
                {/*Escape character '<' in react*/}
                {String.fromCharCode(60)}
            </button>
            {page}
            <button onClick={() => nextPage()}>
                {/*Escape character '>' in react*/}
                {String.fromCharCode(62)}
            </button>
        </div>
    )
}

export default PageButton
