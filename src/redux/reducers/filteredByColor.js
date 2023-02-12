const filterByColor = (state = false, action) => {
    switch(action.type){
        case 'FILTER_COLOR': 
            return state = action.payload;
        default: return state = false;
    }
}

export default filterByColor;