import React from 'react'
import './Navigation.css'
import cosmos from '../Images/cosmos.png'
import homeIcon from '../Images/home-icon.png'
import destinations from '../Images/destinations-icon.png'
import spaceships from '../Images/spaceships-icon.png'
import cartIcon from '../Images/cart-icon.png'
import useToggle from './useToogleState'

function Navigation(props) {
    const {cartItems} = props
    const [isOpen, setIsOpen] = useToggle(false)  


    //itemsBubble and totalItems take the sum of all items and their quantity and displays it next to cart item
    const itemsBubble =  cartItems.map((item)=> {
        return (
        item.qty
        )

      })
      const totalItems = itemsBubble.reduce((a, b) => a + b, 0)

  return (
    <div className='Navigation'>
        <div className='navContent'>
        <ul>
            <li><img src={cosmos} alt='cosmos-logo' id='logo' /></li>

            <li><img src={homeIcon} alt='home-icon' id='icon' />
                <a href=''>Home</a>
            </li>

            <li><img src={destinations} alt='destinations-icon' id='icon' />
                <a href=''>Destinations</a>
            </li>

            <li><img src={spaceships} alt='spaceships-icon' id='icon' />
                <a href=''>Spaceships</a>
            </li>
        </ul>
        <div className='Cart'><img src={cartIcon} id='icon'/>{<p id='totalItems'>{totalItems}</p>}</div>
        </div>

        {/* collapsible div is a modal that opens or closes on the press of the menu button from smaller screen sizes*/}
        
        <div className='collapsible'>
              <button onClick={setIsOpen}>Menu</button>
              <div className={isOpen ? 'isOpen' : 'isClosed'}>
              <ul>

            <li><img src={homeIcon} alt='home-icon' id='icon' />
                <a href=''>Home</a>
            </li>

            <li><img src={destinations} alt='destinations-icon' id='icon' />
                <a href=''>Destinations</a>
            </li>

            <li><img src={spaceships} alt='spaceships-icon' id='icon' />
                <a href=''>Spaceships</a>
            </li>
        </ul>
              </div>
              <li><img src={cosmos} alt='cosmos-logo' id='logo' /></li>
              <div className='Cart'><img src={cartIcon} id='icon'/>{<p id='totalItems'>{totalItems}</p>}</div>
              
            </div>

    </div>
  )
}

export default Navigation