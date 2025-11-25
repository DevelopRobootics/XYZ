import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { AIChatBot } from './components/AIChatBot';
import { QuickViewModal } from './components/QuickViewModal';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';

// Wrapper to get current product for AI Context
const AppContent: React.FC<{ 
  cartItems: CartItem[], 
  addToCart: (p: Product) => void, 
  removeFromCart: (id: number) => void,
  total: number 
}> = ({ cartItems, addToCart, removeFromCart, total }) => {
  
  const location = useLocation();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  // Determine current product context for the AI
  const productIdMatch = location.pathname.match(/\/product\/(\d+)/);
  const currentProduct = productIdMatch 
    ? PRODUCTS.find(p => p.id === Number(productIdMatch[1])) 
    : undefined;

  return (
    <Layout 
      cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      cartItems={cartItems}
      onRemoveItem={removeFromCart}
      total={total}
    >
      <Routes>
        <Route path="/" element={
          <Home 
            featuredProducts={PRODUCTS.slice(0, 4)} 
            onAddToCart={addToCart} 
            onQuickView={setQuickViewProduct}
          />
        } />
        <Route path="/shop" element={
          <Shop 
            products={PRODUCTS} 
            onAddToCart={addToCart} 
            onQuickView={setQuickViewProduct}
          />
        } />
        <Route path="/product/:id" element={<ProductDetail products={PRODUCTS} onAddToCart={addToCart} />} />
      </Routes>
      
      {/* Global Components */}
      <AIChatBot currentProduct={currentProduct || quickViewProduct || undefined} />
      <QuickViewModal 
        product={quickViewProduct} 
        isOpen={!!quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
        onAddToCart={addToCart}
      />
    </Layout>
  );
};

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('lumina_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to load cart", e);
      }
    }
  }, []);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('lumina_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Router>
      <AppContent 
        cartItems={cartItems} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        total={total}
      />
    </Router>
  );
}

export default App;
