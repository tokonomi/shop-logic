import React, { useContext } from 'react'
import CardProductCard from '../components/CardProductCard'
import CardTotalCard from '../components/CardTotalCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { CardStoreManagement } from '../context/CardContext'

const Card = () => {
  const { card } = useContext(CardStoreManagement)

  return (
    <div>
      <div className='card-main-section'>
        <Header />
        <div className='card-product-section'>
          <div className='products-in-sebet'>
            {card.length == 0 ? (<h2> You have no products </h2>) : (
              card.map(item => {
                return <CardProductCard
                  key={item.id}
                  id={item.id}
                  productName={item.productName}
                  price={item.price}
                  quantity={item.quantity}
                  imageUrl={item.imageUrl}
                />
              })
            )}
          </div>
          <CardTotalCard />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Card