import React, { useContext } from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
import { CardStoreManagement } from '../context/CardContext';

const CardProductCard = ({ id, productName, price, imageUrl, quantity }) => {
  const {addToCard} = useContext(CardStoreManagement)
  const {decreaseInCard} = useContext(CardStoreManagement)
  const { deleteCard } = useContext(CardStoreManagement)

  return (
    <div key={id} className="card-product-card">
      <div className='card-product-card-info'>
        <div><img src={imageUrl} alt='product' /></div>
        <p> {productName} </p>
        <span> ${price} </span>
      </div>
      <div className='card-product-card-buttons'>
        <button className='quantity-button' onClick={() => {
          decreaseInCard(id, productName, price, imageUrl, quantity)
          if(quantity == 1) deleteCard(id)
          }}> - </button>
        {quantity && <p> {quantity} </p> }
        <button className='quantity-button' onClick={() => {addToCard(id, productName, price, imageUrl, quantity)}}> + </button>
        <button className='delete-button' onClick={() => deleteCard(id)}>
          {/* <DeleteIcon /> */}X
        </button>
      </div>
    </div>
  )
}

export default CardProductCard