const filterByMaxPrice = (state = false, action) => {
    switch(action.type){
        case 'FILTER_MAX_PRICE': 
            return state = action.payload;
        default: return state = false;
    }
}

export default filterByMaxPrice;