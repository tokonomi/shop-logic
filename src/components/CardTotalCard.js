import React, { useContext } from 'react'
import { CardStoreManagement } from '../context/CardContext'

const CardTotalCard = () => {
  const { card } = useContext(CardStoreManagement)

  const sumAllProducts = card.map(item => {
    return item.quantity * item.price
  })

  const sumPrice = sumAllProducts.reduce((prev, current) => prev + current, 0)

  return (
    <div className='card-total-card'>
      <div className='total-card-text'>
        <h4> Card Total </h4>
        <div className='total-card-product-info'>
          <p> Subtotal: </p>
          <p> ${sumPrice} </p>
        </div>
        <div className='total-card-product-info'>
          <p> Delivery: </p>
          <p> Free </p>
        </div>
        <div className='total-card-product-info'>
          <p> Total: </p>
          <p> ${sumPrice} </p>
        </div>
        <div className='total-card-pay-base'>
          <div className='total-card-pay'>
            <input type="checkbox" checked />
            <p> Cash on Delivery </p>
          </div>
          <div className='total-card-pay'>
            <input type="checkbox" />
            <div>
              <p> Paypal </p>
              <img src='https://preview.colorlib.com/theme/amado/img/core-img/paypal.png.webp' alt='card' />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <button> Buy </button>
    </div>
  )
}

export default CardTotalCard