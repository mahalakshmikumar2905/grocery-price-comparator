import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import ProductSearch from './components/ProductSearch';
import PriceComparisonGrid from './components/PriceComparisonGrid';
// Step 1-la namma create panna data-vai inga import pandrom
import { PRODUCTS, PRICE_DATA } from './utils/products';

function App() {
  const [priceData, setPriceData] = useState<any[]>([]);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setPriceData([]);
      return;
    }

    // 1. Search pandra name match aagura products-ai edukkum
    const matchedProducts = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    // 2. Match aana products-oda price list-ai PRICE_DATA-vula irundhu edukkum
    const results = matchedProducts.map(p => PRICE_DATA[p.id]).filter(Boolean);

    setPriceData(results);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-blue-600" />
            <h1 className="text-xl font-bold">PriceWise</h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Compare Prices Instantly</h2>
          <p className="text-gray-600">Find the best deals across all supermarkets</p>
        </div>

        <div className="mb-8">
          <ProductSearch onSearch={handleSearch} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <PriceComparisonGrid data={priceData} />
        </div>
      </main>
    </div>
  );
}

export default App;