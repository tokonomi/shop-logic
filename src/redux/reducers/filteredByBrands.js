const filterByBrand = (state = [], action) => {
    const currentIndex = state.indexOf(action.payload);
    const newChecked = [...state];
    switch(action.type){
        case 'FILTER_BRAND': 
            if(currentIndex === -1){
                newChecked.push(action.payload);
            }else{
                newChecked.splice(currentIndex, 1);
            }
            return state = [...newChecked];
        default: return state = [...state];
    }
}

export default filterByBrand;