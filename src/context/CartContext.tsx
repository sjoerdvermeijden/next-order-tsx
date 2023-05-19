import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";

type Props = {
  children: any;
};

interface CartItem {
  id: number;
  name: string;
  completed: boolean;
  edit: boolean;
}

type ContextValue = [CartItem[], Dispatch<SetStateAction<CartItem[]>>];

const getItems = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "");

  if (cartItems) {
    return cartItems;
  } else {
    return [];
  }
};

export const CartContext = createContext<ContextValue>([[], () => {}]);

export function CartComponent({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>(getItems());

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("cartItems") || "");
    setCartItems(list);
  }, []);

  return (
    <>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartComponent;
