'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of a product
interface Category {
  size: string;
  price: string;
  selected: boolean;
}

interface Product {
  id: string;
  name: string;
  image: string;
  category: Category[];
}

// Define context type
interface ProductContextType {
  products: Product[];
}

// Initialize ProductContext
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Sample initial data
const initialProducts: Product[] = [
  {
    id: "0x1",
    name: "Sea Salt Roasted Cashews",
    image: "sea-salted-roasted-cashew.png",
    category: [
      {
        size: "50g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x2",
    name: "Sea Salt Roasted Cashews",
    image: "sea-salted-roasted-cashew.png",
    category: [
      {
        size: "150g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x3",
    name: "Sea Salt Roasted Cashews",
    image: "sea-salted-roasted-cashew.png",
    category: [
      {
        size: "170g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x4",
    name: "Sea Salt Roasted Cashews",
    image: "sea-salted-620.png",
    category: [
      {
        size: "300g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x5",
    name: "Sea Salt Roasted Cashews",
    image: "sea-salted-620.png",
    category: [
      {
        size: "620",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x6",
    name: "Unsalted Roasted Cashews",
    image: "unsalted-roasted-cashew.png",
    category: [
      {
        size: "50g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x7",
    name: "Unsalted Roasted Cashews",
    image: "unsalted-roasted-cashew.png",
    category: [
      {
        size: "150g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x8",
    name: "Unsalted Roasted Cashews",
    image: "unsalted-roasted-cashew.png",
    category: [
      {
        size: "170g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x9",
    name: "Unsalted Roasted Cashews",
    image: "unsalted-300.png",
    category: [
      {
        size: "300g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x10",
    name: "Unsalted Roasted Cashews",
    image: "unsalted-300.png",
    category: [
      {
        size: "620g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x11",
    name: "Chilli Roasted Cashews",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "50g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x12",
    name: "Chilli Roasted Cashews",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "150g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x13",
    name: "Chilli Roasted Cashews",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "170g",
        price: "10",
        selected: false,
      },
    ]
  },
  {
    id: "0x14",
    name: "Raw Roasted Cashews",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "1kg",
        price: "10",
        selected: true,
      },
    ]
  },
  {
    id: "0x15",
    name: "Raw Cashew Kernels",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "1kg",
        price: "10",
        selected: true,
      },
    ]
  },
  {
    id: "0x16",
    name: "Cashew Butter (comming soon)",
    image: "chilli-roasted-cashew.png",
    category: [
      {
        size: "--",
        price: "--",
        selected: true,
      },
    ]
  },
]

// Context provider
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);


  return (
    <ProductContext.Provider value={{ products}}>
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
