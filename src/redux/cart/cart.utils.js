export const updateCartItem = (cartItems, item, quantity = 1) => {
  // 1 - increase or create
  // -1 - decrease
  // 0 - delete
  const existingCartItem = cartItems.find(({ id }) => id === item.id);
  const existingCartItemIndex = cartItems.findIndex(({id}) => id === item.id);

  if (!existingCartItem) {
    //new item
    return [...cartItems, { ...item, quantity: 1 }];
  } else {
    const newItem = {...existingCartItem, quantity: existingCartItem.quantity + quantity};
    if (quantity === 0 || newItem.quantity === 0) {
      //removing
      return [...cartItems.slice(0, existingCartItemIndex), ...cartItems.slice(existingCartItemIndex + 1)]
    } else {
      //updating quantity
      return [...cartItems.slice(0, existingCartItemIndex), newItem, ...cartItems.slice(existingCartItemIndex + 1)]
    }

  }
}