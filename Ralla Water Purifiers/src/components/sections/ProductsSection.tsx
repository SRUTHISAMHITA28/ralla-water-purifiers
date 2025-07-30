import React, { useState, useEffect } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { api } from '../../api';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  features: string[];
  description: string;
  category: string;
  stock: number;
}

const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/api/products');
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        if (err.response) {
          setError(`Server error: ${err.response.status} - ${err.response.statusText}`);
        } else if (err.request) {
          setError('No response from server. Please check if backend is running.');
        } else {
          setError('Error fetching products. Please check your network connection.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">
            <p>{error}</p>
            <p>Please make sure:</p>
            <ul className="list-disc pl-5">
              <li>Backend server is running on port 5000</li>
              <li>MongoDB is installed and running</li>
              <li>Products have been seeded in the database</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 pt-6">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of innovative water purifiers designed to provide clean,
            safe water while conserving water and energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder-image.png'; // Fallback image
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">{product.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">₹{product.price}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;