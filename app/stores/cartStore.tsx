import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  total: () => number;
  clearCart: () => void;
}

const cartStoreCreator: StateCreator<CartState> = (set, get) => ({
  items: [],
  addItem: (item) => {
    const existing = get().items.find((i) => i.id === item.id);
    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({ items: [...get().items, { ...item, quantity: 1 }] });
    }
  },
  removeItem: (id) => {
    set({ items: get().items.filter((i) => i.id !== id) });
  },
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) return get().removeItem(id);
    set({
      items: get().items.map((i) => (i.id === id ? { ...i, quantity } : i)),
    });
  },
  total: () => {
    return get().items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  },
  clearCart: () => {
    set({ items: [] });
  },
});

export const useCartStore = create<CartState>()(
  persist(cartStoreCreator, {
    name: "cart-storage",
  })
);
