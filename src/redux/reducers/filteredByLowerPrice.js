const filterByLowerPrice = (state = 0, action) => {
    switch(action.type){
        case 'FILTER_LOWER_PRICE': 
            return state = action.payload;
        default: return state = 0;
    }
}

export default filterByLowerPrice;