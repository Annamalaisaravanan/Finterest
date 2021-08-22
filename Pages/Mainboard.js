import React from 'react';
import './Mainboard.css';
import Pin from './Pin';

function Mainboard(props){

    let { pins } = props;

         return(
             <div className='Wrapper'>
                     <div className='contain'>
                         {pins.map((pin)=>{
                               let {urls} = pin;
                               return <Pin  urls={urls}/>
                         })}

                            
                     </div>
             </div>
         )
};


export default Mainboard;