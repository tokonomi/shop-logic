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
          decreaseInCard(id, productName, price, imageUrl, quantity) // Quantity azaltmaq ucun, contextde teze funksiya yaradib, objecte aid olan propertini azaldiram 
          if(quantity == 1) deleteCard(id) // Validation kimi item-in miqdari 1 < olsa, cart bosalmalidir
          }}> - </button>
        {quantity && <p> {quantity} </p> }
        <button className='quantity-button' onClick={() => {addToCard(id, productName, price, imageUrl, quantity)}}> + </button>  {/* Bu funksiya cart-a elave etmek contextde olan funksiyasindan istifade elemisem */}
        <button className='delete-button' onClick={() => deleteCard(id)}>
          {/* <DeleteIcon /> */}X
        </button>
      </div>
    </div>
  )
}

export default CardProductCard