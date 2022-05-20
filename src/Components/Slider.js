import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import './Slider.css'
import banner1 from '../Images/banner1.png'
import banner2 from '../Images/banner2.jpg'
import banner3 from '../Images/banner3.jpg'
import { Slide } from 'react-slideshow-image';

function Slider(props) {

  const {onAdd} = props
    const slideImages = [
        {
          url: `${banner1}` ,
          title: 'Enceladus',
          description: "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan.Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.",
          price: '999.990 €',
        },
        {
          url: `${banner2}`,
          title: 'Mimas',
          description: "Mimas is one of Saturn's 62 satellites. The later name, Mimas, comes from Greek mythology , where Mimas is one of the giants, the son of Gaia .",
          price: '798.990 €'
        },
        {
          url: `${banner3}`,
          title: 'Dione',
          description: "Dione (/daɪˈoʊni/) is a moon of Saturn. It was discovered by Italian astronomer Giovanni Domenico Cassini in 1684.[10] It is named after the Titaness Dione of Greek mythology. It is also designated Saturn IV",
          price: '599.990 €'
        },
      ];

      const slides = slideImages.map((slideImage, index)=> (
        <div className="each-slide" key={index}>
          <div style={{'backgroundImage': `url(${slideImage.url})`}}>
          
          </div>
          <span>
            <div>
          <h3>{slideImage.title}</h3>
          <p id='product-description'>{slideImage.description}</p>
          </div>
          <div className='purchase'>
            <div className='product-pricing'>
            <h4>{slideImage.price}</h4>
            <p>one way ticket</p>
            </div>
            <button onClick={()=> onAdd(slideImage)}>Purchase</button>
          </div>

          </span>
        </div>
      ))
    
  return (
    <div className='Slider'>
        <div className="slideContainer">
        <Slide>
         {slides} 
        </Slide>
      </div>
        
    </div>
  )
}

export default Slider