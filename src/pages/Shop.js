import React, { useContext } from 'react'
import Header from '../components/Header'
import { CardStoreManagement } from '../context/CardContext'
import ProductCard from "../components/ProductCard"
import Footer from '../components/Footer'
import SearchParams from '../components/SearchParams'
import ShopProductCard from '../components/ShopProductCard'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const Shop = () => {
  const { products } = useContext(CardStoreManagement)
  const filterByColor = useSelector(state => state.filterByColor)
  const filterByBrand = useSelector(state => state.filterByBrand)
  const filterByLowerPrice = useSelector(state => state.filterByLowerPrice)
  const filterByMaxPrice = useSelector(state => state.filterByMaxPrice)

  

  return (
    <div>
      <div className='shop-main-section'>
        <Header />
        <SearchParams />

        <div className='shop-products-section'>
          {
            products
            .filter(e => 
              filterByBrand.length ? filterByBrand.includes(e.brand) : true
            )
            .filter((e) =>
              filterByColor ? e.color == filterByColor : true
            )
            .filter((e) =>
              filterByLowerPrice ? e.price >= filterByLowerPrice : true &&
              filterByMaxPrice ? e.price <= filterByMaxPrice : true 
            )
            .map(item => {
              return <ShopProductCard
                key={item.id}
                id={item.id}
                productName={item.productName}
                price={item.price}
                quantity={item.quantity}
                imageUrl={item.imageUrl}
              />
            })
          }
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Shop