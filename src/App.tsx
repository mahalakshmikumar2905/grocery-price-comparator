import { useState } from "react";
import { ProductSearch } from "./components/ProductSearch";
import { PriceComparisonGrid } from "./components/PriceComparisonGrid";
import { getProductPrices } from "./utils/products";
import { ShoppingCart } from "lucide-react";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<{ id: string; name: string } | null>(null);
  const [priceData, setPriceData] = useState(getProductPrices("1"));

  const handleSearch = (productId: string, productName: string) => {
    setSelectedProduct({ id: productId, name: productName });
    const data = getProductPrices(productId);
    setPriceData(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">GrocerCompare UK</h1>
              <p className="text-sm text-gray-500">Compare grocery prices instantly</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <ProductSearch onSearch={handleSearch} />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <PriceComparisonGrid data={priceData} />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2024 GrocerCompare UK. Helping you save money on groceries.</p>
            <div className="flex items-center gap-4">
              <span>Tesco</span>
              <span>Sainsbury's</span>
              <span>Asda</span>
              <span>Morrisons</span>
              <span>Aldi</span>
              <span>Lidl</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;