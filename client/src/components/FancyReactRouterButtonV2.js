import React from 'react'
import { Link, Route } from 'react-router-dom'

import '../css/FancyButtonStyle.css'

const FancyButton = ({ text, to, exact }) => {

    return (
        <Route path={to} exact={exact} children={({ match }) => (
            <Link
                className={'fancyButton'}
                to={to} 
                >
                <div className='InnerButtonText'>
                    { match ? "< " + text + " >" : "  " + text + "  "}
                </div>
            </Link>
            )
        } 
        />
    )

}

export default FancyButton