import { FETCH_LGOIN, LOGOUT } from './actionTypes';

// 异步action
export const logingFun = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: FETCH_LGOIN,
      bool: true,
    })
  })
}


// 同步action
export function logoutFun(bool) {
  return {
    type: LOGOUT,
    bool
  }
}

// reducer

const initialState = {
  loginBool: false
};

export function reducer (state = initialState, action) {
  switch(action.type){
    case FETCH_LGOIN:
      return { ...state,loginBool: action.bool }
    case LOGOUT:
      // console.log(action)
      return { ...state,loginBool: false}
    default:
      return state;
  }

}
