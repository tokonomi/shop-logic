export const filterByColor = (type) => {
    return{
        type: 'FILTER_COLOR',
        payload: type
    }
}

export const filterByBrand = (brand) => {
    return{
        type: 'FILTER_BRAND',
        payload: brand
    }
}

export const filterByLowerPrice = (num) => {
    return{
        type: 'FILTER_LOWER_PRICE',
        payload: num
    }
}

export const filterByMaxPrice = (num) => {
    return{
        type: 'FILTER_MAX_PRICE',
        payload: num
    }
}