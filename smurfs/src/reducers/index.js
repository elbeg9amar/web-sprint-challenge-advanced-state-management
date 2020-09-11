import {
    FETCH_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL
} from '../actions/SmurfActions'


const initialState = {
    datas:[],
    loadingData:true,
    errorMessage:''
}
export  default  (state=initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return{
                ...state,
                loadingData: true,
                errorMessage:'',
            }
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                loadingData: false,
                errorMessage:'',
                datas: action.payload

            }
        case FETCH_DATA_FAIL: 
            return{
                ...state,
                errorMessage: action.payload.message,
                loadingData: false
            }
        default: return state
    }
}