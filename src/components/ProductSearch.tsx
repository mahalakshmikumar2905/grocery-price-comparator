import { useState, useMemo } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, History, X } from "lucide-react";
import { PRODUCTS } from "../utils/products";
import { useRecentSearches } from "../utils/useRecentSearches";

interface ProductSearchProps {
  onSearch: (productId: string, productName: string) => void;
}

export function ProductSearch({ onSearch }: ProductSearchProps) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { recentSearches, addRecentSearch, clearRecentSearches } = useRecentSearches();

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    return PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
  }, [query]);

  const handleSelect = (productId: string, productName: string) => {
    setQuery(productName);
    setShowDropdown(false);
    addRecentSearch(productName);
    onSearch(productId, productName);
  };

  const handleCompare = () => {
    const exactMatch = PRODUCTS.find(
      (p) => p.name.toLowerCase() === query.toLowerCase()
    );
    if (exactMatch) {
      addRecentSearch(exactMatch.name);
      onSearch(exactMatch.id, exactMatch.name);
      setShowDropdown(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for a product (e.g., milk, bread, eggs)"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              className="pl-10 h-12 text-base"
            />
          </div>
          <Button onClick={handleCompare} className="h-12 px-6 bg-blue-600 hover:bg-blue-700">
            Compare
          </Button>
        </div>

        {showDropdown && (filteredProducts.length > 0 || recentSearches.length > 0) && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
            {filteredProducts.length > 0 && (
              <div className="p-2">
                <div className="text-xs font-medium text-gray-500 px-3 py-2">Products</div>
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(product.id, product.name)}
                    className="w-full text-left px-3 py-3 hover:bg-gray-50 rounded-md transition-colors flex items-center justify-between group"
                  >
                    <span className="text-gray-900 group-hover:text-blue-600">{product.name}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && recentSearches.length > 0 && (
              <div className="p-2">
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="text-xs font-medium text-gray-500 flex items-center gap-2">
                    <History className="w-3 h-3" />
                    Recent Searches
                  </div>
                  <button
                    onClick={clearRecentSearches}
                    className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"
                  >
                    <X className="w-3 h-3" />
                    Clear
                  </button>
                </div>
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const product = PRODUCTS.find((p) => p.name === search);
                      if (product) {
                        handleSelect(product.id, product.name);
                      }
                    }}
                    className="w-full text-left px-3 py-3 hover:bg-gray-50 rounded-md transition-colors text-gray-700"
                  >
                    {search}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {recentSearches.length > 0 && !showDropdown && (
        <div className="mt-4">
          <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
            <History className="w-4 h-4" />
            Recent Searches
          </div>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => {
                  const product = PRODUCTS.find((p) => p.name === search);
                  if (product) {
                    setQuery(product.name);
                    handleSelect(product.id, product.name);
                  }
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}