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
  title: string;
  count: number;
}

type ContextValue = [CartItem[], Dispatch<SetStateAction<CartItem[]>>];

export const CartContext = createContext<ContextValue>([[], () => {}]);

export function CartComponent({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
