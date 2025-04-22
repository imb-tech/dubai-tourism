import ProductCard from 'components/shared/product-card';
import { ChevronRight } from 'lucide-react';
import React from 'react';

const products: Product[] = [
  {
    id: 1,
    name: 'Atraction ticketlar',
    image: '/product.png',
    price: 350.00,
  },
  {
    id: 2,
    name: 'Transfers xizmati',
    image: '/product.png',
    price: 350.00,
  },
  {
    id: 3,
    name: 'Mice group',
    image: '/product.png',
    price: 350.00,
  },
  {
    id: 4,
    name: 'VIP Concierge',
    image: '/product.png',
    price: 350.00,
  },
];

export default function Products() {
  return (
    <div className='container mx-auto lg:px-0 px-3'>
      <div className="flex items-center mb-3">
        <h2 className="text-3xl font-semibold">Best sellers</h2>
        <ChevronRight />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((s) => (
          <ProductCard key={s.id} {...s} />
        ))}
      </div>
    </div>
  );
}
