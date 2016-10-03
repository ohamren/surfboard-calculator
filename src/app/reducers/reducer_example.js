//import {ADD_SOMETHING_TO_SOMETHING} from '../actions/index'

/*
This reducer handles the changes to the basket item list and also returns
the state of it.

This would be the place to connect the app to an API
*/

/*
export default function(state = [], action) {
  switch (action.type) {
    case ADD_BASKET_ITEM:
      return state.concat(action.payload)

    case EDIT_BASKET_ITEM:
      return state.map(basketItem => {
        if (basketItem.id === action.payload.id) {
          basketItem.basketItemText = action.payload.basketItemText
        }
        return basketItem
      })

    case REMOVE_BASKET_ITEM:
      return state.filter(basketItem => {
        return basketItem.id !== action.payload.id
      })

    case NEW_BASKET_ITEM_LIST:
      return []
  }
  return state
}
*/
