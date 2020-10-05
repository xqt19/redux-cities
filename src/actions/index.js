// TODO: add and export your own actions
import cities from '../reducers/allcities'

export const setCities=()=>{
    // simulate an API CALL
    return {
        type: 'SET_CITIES',
        payload: cities
    }
}

export const selectCity = (city) => {
    return {
        type: 'SELECT_CITY',
        payload: city
    }
}
