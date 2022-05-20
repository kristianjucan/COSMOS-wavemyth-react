import React from 'react'
import './Incentive.css'
import icon1 from '../Images/icon1.png'
import icon2 from '../Images/icon2.png'
import icon3 from '../Images/icon3.png'
import arrow from '../Images/arrow.png'


function Incentive() {
    
  return (
    <div className='incentive'>
        <div className='rowOfSteps'>
            <div className='step'>
                <img src={icon1}/>
                <p>pack</p>
            </div>
            <div>
                <img src={arrow} id='arrow'/>
            </div>
            <div className='step'>
                <img src={icon2}/>
                <p>fly</p>
            </div>
            <div>
                <img src={arrow} id='arrow'/>
            </div>
            <div className='step'>
                <img src={icon3}/>
                <p>live</p>
            </div>
            <div>
                <img src={arrow} id='arrow'/>
            </div>
            <div className='last-step'>
                <p id='enjoy'>ENJOY</p>
                <p id='new-world'>A NEW WORLD!</p>
            </div>
        </div>
    </div>


  )
}

export default Incentive