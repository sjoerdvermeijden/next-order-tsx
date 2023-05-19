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

export const FilterContext = createContext<ContextValue>([[], () => {}]);

export function FilterComponent({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("cartItems") || "");
    setCartItems(list);
  }, []);

  return (
    <>
      <FilterContext.Provider value={[cartItems, setCartItems]}>
        {children}
      </FilterContext.Provider>
    </>
  );
}

export default FilterComponent;
