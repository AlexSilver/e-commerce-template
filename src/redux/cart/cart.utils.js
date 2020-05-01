export const addItemToCart = (cartItems, item) => {
  const existingCartItem = cartItems.find(({ id }) => id === item.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...item, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...item, quantity: 1 }];
};