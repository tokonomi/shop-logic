import React, { useContext } from 'react'
// import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { CardStoreManagement } from '../context/CardContext';

const ShopProductCard = ({ id, productName, price, imageUrl, quantity }) => {
  const {addToCard} = useContext(CardStoreManagement)

  return (
    <div key={id} className="shop-product-card">
      <div className='shop-product-card-image'><img src={imageUrl} alt='product' /></div>
      <div className='shop-product-card-info'>
        <div>
          <hr />
          <p> ${price} </p>
          <span> {productName} </span>
        </div>
        <button onClick={() => addToCard(id, productName, price, imageUrl, quantity)}>
          {/* <LocalGroceryStoreOutlinedIcon /> */} Store
        </button>
      </div>
    </div>
  )
}

export default ShopProductCard