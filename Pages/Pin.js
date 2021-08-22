import React from 'react';
import './Pin.css';
function Pin(props) {

    let {urls} = props;

    return (
        <div className='pin2'>
                 <div className='contain2'>
                           <img src={urls.regular} alt="pin"/>
                 </div>
        </div>
    )
}

export default Pin;
