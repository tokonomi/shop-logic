import { combineReducers } from "redux";
import filterByColor from "./filteredByColor";
import filterByLowerPrice from "./filteredByLowerPrice";
import filterByBrand from "./filteredByBrands";
import filterByMaxPrice from "./filterByMaxPrice";

const store = combineReducers({
    filterByColor,
    filterByBrand,
    filterByLowerPrice,
    filterByMaxPrice
})

export default store;