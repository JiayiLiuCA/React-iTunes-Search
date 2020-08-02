import React from 'react'
import '../Styles/Loading.css'

import reactLogo from '../img/reactLogo.svg'


const Loading = () => {
    return (
        <div className="search-logo-container">
            {/*Loading spinning animation*/}
            <img src={reactLogo}
                className="react-search-logo"
                width='30vmin'
                height='30vmin'
                alt='react-search-logo'
            />
        </div>
    )
}

export default Loading
