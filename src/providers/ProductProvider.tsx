import React, { createContext, useState } from 'react';
import { ProductCardProps } from 'ui/components/ProductCard';

interface IContextProps {
  product: any;
  setProduct: ({ images, name, price }: ProductCardProps) => void;
}

export const ProductContext = createContext({} as IContextProps);

const ProductProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [product, setProduct] = useState({ images: [], name: '', price: 0, description: '' });
  const value = { product, setProduct };
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
