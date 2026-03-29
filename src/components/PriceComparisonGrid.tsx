import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { SupermarketLogo } from "./SupermarketLogo";
import { ProductPrices } from "../utils/products";
import { Check } from "lucide-react";

interface PriceComparisonGridProps {
  data: ProductPrices | null;
}

export function PriceComparisonGrid({ data }: PriceComparisonGridProps) {
  if (!data) {
    return (
      <div className="text-center py-16">
        <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No product selected</h3>
        <p className="text-gray-500">Search for a product to compare prices across supermarkets</p>
      </div>
    );
  }

  const cheapestPrice = Math.min(...data.prices.map((p) => p.price));

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{data.product.name}</h2>
        <p className="text-gray-500">Compare prices across 6 major UK supermarkets</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.prices.map((item, index) => {
          const isCheapest = item.price === cheapestPrice;
          return (
            <Card
              key={`${item.supermarket}-${index}`}
              className={`transition-all hover:shadow-lg ${
                isCheapest
                  ? "border-2 border-green-500 shadow-md"
                  : "border border-gray-200"
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <SupermarketLogo supermarket={item.supermarket} />
                    <CardTitle className="text-lg">{item.supermarket}</CardTitle>
                  </div>
                  {isCheapest && (
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      <Check className="w-3 h-3" />
                      Best Value
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900">
                      £{item.price.toFixed(2)}
                    </span>
                  </div>
                  <CardDescription className="text-sm">{item.unitPrice}</CardDescription>
                  {isCheapest && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-green-600 font-medium">
                        Save up to £{(cheapestPrice * 1.2 - cheapestPrice).toFixed(2)} compared to other stores
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-sm text-blue-800">
          <span className="font-medium">💡 Tip:</span> Prices are updated regularly but may vary by location. 
          Always check in-store for the most accurate pricing.
        </p>
      </div>
    </div>
  );
}