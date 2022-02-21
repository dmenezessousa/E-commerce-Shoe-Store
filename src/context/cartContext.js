import { createContext, useContext, useReducer } from "react";


export const shoppingCartContext = createContext();

export const useShoppingCart = () => useContext(shoppingCartContext);

export const shoppingCartInitialState = [];

const ACTIONS ={
  addItemToCart: 'addItemToCart',
  removeItemFromCart: 'removeItemFromCart',
  emptyCart: 'emptyCart'
}

const shoppingCartReducer = (state, action) => {
  switch(action.type){
    case ACTIONS.addItemToCart:
      
        const itemFoundInCart = state.find(cartItem => cartItem.id === action.cartItem.id);

        if(!itemFoundInCart){
          return [...state, {...action.cartItem, quantity: 1}];
        }

        const cartWithFoundItemRemoved = state.filter(item => item.id !== action.cartItem.id);
        return [...cartWithFoundItemRemoved, {...action.cartItem, quantity: itemFoundInCart.quantity + 1 }]
    
    case ACTIONS.removeItemFromCart: 
        return state.filter(item => item.id !== action.itemId)
      
    case ACTIONS.emptyCart:
      return shoppingCartInitialState;

    default: 
        return state

  }
};

export const ShoppingCartProvider = (props) => {
  const { children } = props;
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, shoppingCartInitialState); 

  const removeItem = (id) => {
    dispatch({
      type: ACTIONS.removeItemFromCart,
      itemId: id,
    })
  };
  const addItemToCart = (product) => {
    
    dispatch({
      type: ACTIONS.addItemToCart,
      cartItem: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
      }
    })
  };

  const emptyShoppingCart = () => {
    dispatch({type: ACTIONS.emptyCart})
  }

  const total = shoppingCart.reduce((acc, cartItem) => {
    return acc + (cartItem.price * cartItem.quantity);
  }, 0);

  console.log('total: ', total);
  
  return (
    <shoppingCartContext.Provider value={{ shoppingCart, removeItem, addItemToCart, emptyShoppingCart, total }}>
      {children}
    </shoppingCartContext.Provider>
  )
}
