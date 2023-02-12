import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardStoreManagement } from '../context/CardContext'
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
// import TwitterIcon from '@mui/icons-material/Twitter';

const Header = () => {
  const { card } = useContext(CardStoreManagement)

  const allQuantity = card.map(item => {
    return item.quantity
  })

  const sumQuantity = allQuantity.reduce((prev, current) => prev + current, 0)

  return (
    <div className='navbar'>
      <div className='logo'>
        <h1> Amado </h1>
        <hr />
      </div>

      <nav>
        <ul>
          <li>
            <hr />
            <Link to="/"> Home </Link>
          </li>
          <li>
          <hr />
            <Link to="/shop"> Shop </Link>
          </li>
          <li>
          <hr />
            <Link to="/card"> Card ({sumQuantity}) </Link>
          </li>
          <li>
          <hr />
            <Link to="/checkout"> Checkout </Link>
          </li>
        </ul>
      </nav>

      <div className='social-icons'>
        <a href='https://www.pinterest.com/' target="_blank">
          {/* <PinterestIcon /> */} PT
        </a>
        <a href='https://www.instagram.com/' target="_blank">
          {/* <InstagramIcon /> */} IN
        </a>
        <a href='https://www.facebook.com/' target="_blank">
          {/* <FacebookRoundedIcon /> */} FB
        </a>
        <a href='https://twitter.com/explore' target="_blank">
          {/* <TwitterIcon /> */} TW
        </a>
      </div>
    </div>
  )
}

export default Header