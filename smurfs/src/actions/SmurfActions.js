import axios from 'axios'

export const FETCH_DATA= 'FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL'

export const POST_DATA= 'POST_DATA'
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS'
export const POST_DATA_FAIL = 'POST_DATA_FAIL'

export const getData = () => dispatch => {
    dispatch ({ type: FETCH_DATA })
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: FETCH_DATA_FAIL, payload: {message: 'https://tsal-eszuskq0bptlfh8awbb.stackpathdns.com/wp-content/uploads/beans/images/Waiting-Memes-52918-aad4877.jpg'}})
    })

}

export const postData = (input) => dispatch => {
    dispatch ({type: POST_DATA})
    axios.post('http://localhost:3333/smurfs',input)
    .then(res => {
        dispatch({type: POST_DATA_SUCCESS, payload: res.data})
    })
    .catch(err =>{
        dispatch({type: POST_DATA_FAIL, payload: {message: 'https://tsal-eszuskq0bptlfh8awbb.stackpathdns.com/wp-content/uploads/beans/images/Waiting-Memes-52918-aad4877.jpg'}})
    })
}