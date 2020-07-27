import React from 'react'
import '../Styles/NoResult.css'
import notFound from '../img/notFound.png'

const NoResult = ({searchText}) => {
    return (
        <div className="no-result">
          <img src={notFound} width="400px" height="400px" alt="Not Found" />
          <strong>
            {`Oops, no result for '${searchText}'`}
          </strong>
        </div>
    )
}

export default NoResult
