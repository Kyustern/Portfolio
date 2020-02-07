import React from 'react'

import '../css/ResponseInfo.css'

import Spinner from './Spinner'

const ResponseInfo = (props) => {

    return (
        <div className='wrapper'>
            <div className='content'>
                {
                    props.children ? props.children : <Spinner />
                }
            </div>
        </div>
    )
}

export default ResponseInfo