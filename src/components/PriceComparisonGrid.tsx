import React from 'react';

const PriceComparisonGrid = ({ data }: { data: any[] }) => {
  // Search result edhum illana indha message kaattum
  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p className="text-lg">Enter a product name (like 'Milk', 'Egg', or 'Bread') to see price comparisons</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {data.map((item) => (
        <div key={item.product.id} className="bg-white border rounded-xl overflow-hidden shadow-sm">
          {/* Product Name and Category Header */}
          <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex justify-between items-center">
            <h3 className="text-xl font-bold text-blue-900">{item.product.name}</h3>
            <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {item.product.category}
            </span>
          </div>

          {/* Supermarket Comparison Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {item.prices.map((p: any, idx: number) => (
                <div 
                  key={idx} 
                  className={`flex justify-between items-center p-4 rounded-lg border ${
                    idx === 0 ? 'bg-green-50 border-green-200 ring-2 ring-green-500 ring-opacity-50' : 'bg-gray-50 border-gray-100'
                  }`}
                >
                  <div>
                    <p className="font-bold text-gray-800">{p.supermarket}</p>
                    <p className="text-xs text-gray-500">{p.unitPrice}</p>
                    {idx === 0 && (
                      <span className="text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded mt-1 inline-block uppercase font-black">
                        Cheapest
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-gray-900">£{p.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceComparisonGrid;