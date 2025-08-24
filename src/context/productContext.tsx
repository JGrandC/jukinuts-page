'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of a category
interface Category {
  size: string;
  price: string;
  packaging: string;
}

// Define the shape of a product
export interface Product {
  id: string;
  name: string;
  image: string;
  category: Category;
}

// Define the shape of an item in the cart
export interface Item extends Product {
  quantity: number;
  total: number;
}

// Define context type
interface ProductContextType {
  products: Product[];
  cart: Item[];
  prodId: string;
  activeProd: (prodId: string) => void;
  modal: boolean;
  toggleModal: () => void;
  addItem: (prodId: string) => void;
  removeItem: (prodId: string) => void;
  updateQuantity: (prodId: string, quantity: number) => void;
  itemVariants: (name: string, packaging: string) => Product[];
}

// Initialize ProductContext
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Sample initial data
const initialProducts: Product[] = [
  {
    id: "0x1",
    name: "Sea Salt Roasted Cashews",
    image: "Artboard_1-removebg-preview.png",
    category: {
      size: "50g",
      price: "15",
      packaging: "pouch",
    },
  },
  {
    id: "0x2",
    name: "Sea Salt Roasted Cashews",
    image: "Artboard_1-removebg-preview.png",
    category: {
      size: "150g",
      price: "40",
      packaging: 'pouch',
    },
  },
  {
    id: "0x4",
    name: "Sea Salt Roasted Cashews",
    image: "Artboard_5-removebg-preview.png",
    category: {
      size: "300g",
      price: "75",
      packaging: "jar"
    },
  },
  {
    id: "0x5",
    name: "Sea Salt Roasted Cashews",
    image: "Artboard_5-removebg-preview.png",
    category: {
      size: "620g",
      price: "140",
      packaging: "jar"
    },
  },
  {
    id: "0x6",
    name: "Unsalted Roasted Cashews",
    image: "Artboard_2-removebg-preview.png",
    category: {
      size: "50g",
      price: "15",
      packaging: "pouch"
    },
  },
  {
    id: "0x7",
    name: "Unsalted Roasted Cashews",
    image: "Artboard_2-removebg-preview.png",
    category: {
      size: "150g",
      price: "40",
      packaging: "pouch"
    },
  },
  {
    id: "0x9",
    name: "Unsalted Roasted Cashews",
    image: "Artboard_4-removebg-preview.png",
    category: {
      size: "300g",
      price: "75",
      packaging: "jar",
    },
  },
  {
    id: "0x10",
    name: "Unsalted Roasted Cashews",
    image: "Artboard_4-removebg-preview.png",
    category: {
      size: "620g",
      price: "140",
      packaging: "jar"
    },
  },
  {
    id: "0x11",
    name: "Chilli Roasted Cashews",
    image: "Artboard_3-removebg-preview.png",
    category: {
      size: "50g",
      price: "15",
      packaging: "pouch"
    },
  },
  {
    id: "0x12",
    name: "Chilli Roasted Cashews",
    image: "Artboard_3-removebg-preview.png",
    category: {
      size: "150g",
      price: "40",
      packaging: "pouch"
    },
  },
  {
    id: "0x16",
    name: "Cashew Butter (Out of stock)",
    image: "Cashew_butter-removebg-preview.png",
    category: {
      size: "--",
      price: "--",
      packaging: "jar"
    },
  },
];

// Context provider
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>(initialProducts);
  const [prodId, setProdId] = useState<string>("");
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState<Item[]>([]);

  // Toggle the modal state
  const toggleModal = () => setModal((prev) => !prev);

  // Save the active product ID
  const activeProd = (prodId: string) => setProdId(prodId);

  // Add item to the cart
  const addItem = (prodId: string) => {
    const selected = products.find((product) => product.id === prodId);

    if (!selected) return; // If the product is not found, exit

    setCart((prevCart) => {
      // Check if the product is already in the cart
      const existingItem = prevCart.find((item) => item.id === prodId);

      if (existingItem) {
        // Update the quantity and total if the item exists
        return prevCart.map((item) =>
          item.id === prodId
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: (item.quantity + 1) * Number(item.category.price),
              }
            : item
        );
      } else {
        // Add the new item to the cart
        const newItem: Item = {
          ...selected,
          quantity: 1,
          total: Number(selected.category.price),
        };
        return [...prevCart, newItem];
      }
    });
  };

  // Update item in the cart
  const updateQuantity = (prodId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === prodId
          ? {
              ...item,
              quantity,
              total: quantity * Number(item.category.price),
            }
          : item
      )
    );
  };

  // Remove item from the cart
  const removeItem = (prodId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== prodId));
  };

  const itemVariants = (name: string, packaging: string) => {
    return products.filter(variant => variant.name == name && variant.category.packaging == packaging)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        prodId,
        activeProd,
        modal,
        toggleModal,
        cart,
        addItem,
        removeItem,
        updateQuantity,
        itemVariants,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
