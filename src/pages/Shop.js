import React, { useContext } from 'react'
import Header from '../components/Header'
import { CardStoreManagement } from '../context/CardContext'
import ProductCard from "../components/ProductCard"
import Footer from '../components/Footer'
import SearchParams from '../components/SearchParams'
import ShopProductCard from '../components/ShopProductCard'
import { useSelector } from 'react-redux'

const Shop = () => {
  const { products } = useContext(CardStoreManagement)
  // Burda olan constantalar Redux-la baglidir
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
            )// Burda brandleri filter edirem
            .filter((e) =>
              filterByColor ? e.color == filterByColor : true
            )// Burda renglerle filter edirem
            .filter((e) =>
              filterByLowerPrice ? e.price >= filterByLowerPrice : true &&
              filterByMaxPrice ? e.price <= filterByMaxPrice : true 
            )// Burda qiymetlerle filter edirem
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