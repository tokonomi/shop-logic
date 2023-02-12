import React, { useContext } from 'react'
// import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
// import DeleteIcon from '@mui/icons-material/Delete';
import { CardStoreManagement } from '../context/CardContext';

const ProductCard = ({ id, productName, price, description, imageUrl, quantity, showAddButton = true, showDeleteButton = false }) => {
  const { addToCard, deleteCard } = useContext(CardStoreManagement)

  return (
    <div key={id}>
      <img src={imageUrl} alt="product" />
      <p> {productName} </p>
      <p> {price} </p>
      <p> {description} </p>
      {quantity && <p> {quantity} </p>}

      {showAddButton && (
        <button onClick={() => addToCard(id, productName, price, description, imageUrl, quantity)}>
          {/* <LocalGroceryStoreOutlinedIcon /> */}  store
        </button>
      )}

      {showDeleteButton && (
        <button onClick={() => deleteCard(id)}>
          {/* <DeleteIcon /> */} del
          </button>
      )}

    </div>
  )
}

export default ProductCard