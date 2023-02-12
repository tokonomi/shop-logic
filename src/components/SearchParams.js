import React from 'react'
import { useDispatch } from 'react-redux'
import { filterByBrand, filterByColor, filterByLowerPrice, filterByMaxPrice } from '../redux/actions';

const SearchParams = () => {

  const dispatch = useDispatch();

  return (
    <div className='search-params-section'>
      <form className='brands-section'>
        {/* Burda men inputlarla redux state brandin adini gonderirem */}
        <h4> Brands </h4>
        <div>
          <input type="checkbox" onChange={() => {dispatch(filterByBrand('Tecno'))}}/>
          <label> Tecno </label>
        </div>
        <div>
          <input type="checkbox" onChange={() => {dispatch(filterByBrand('Huawei'))}}/>
          <label> Huawei </label>
        </div>
        <div>
          <input type="checkbox" onChange={() => {dispatch(filterByBrand('Sony'))}}/>
          <label> Sony </label>
        </div>
        <div>
          <input type="checkbox" onChange={() => {dispatch(filterByBrand('OnePlus'))}}/>
          <label> OnePlus </label>
        </div>
      </form>

      <div className='colors-section'>
        <h4> Color </h4>
        <div>
          {/* Burda men buttonlardan redux state reng gonderirem */}
          <button className='white-color' onClick={() => {dispatch(filterByColor('white'))}}></button>
          <button className='blue-color'  onClick={() => {dispatch(filterByColor('blue'))}}></button>
        </div>
        <div>
          <button className='red-color' onClick={() => {dispatch(filterByColor('red'))}}></button>
          <button className='black-color' onClick={() => {dispatch(filterByColor('black'))}}></button>
        </div>
      </div>

      <div className='price-section'>
        <h4> Price </h4>
        <div>
          {/* Burda men inputlarla redux state qiymetleri gonderirem */}
          <input type="number" placeholder='0' onChange={(e) => {dispatch(filterByLowerPrice(e.target.value))}}/>
          <span></span>
          <input type="number" placeholder='830' onChange={(e) => {dispatch(filterByMaxPrice(e.target.value))}}/>
        </div>
      </div>
    </div>
  )
}

export default SearchParams