import { ShoppingCart, Store } from "lucide-react";

interface SupermarketLogoProps {
  supermarket: string;
  className?: string;
}

export function SupermarketLogo({ supermarket, className = "" }: SupermarketLogoProps) {
  const colors: Record<string, string> = {
    Tesco: "bg-blue-500",
    "Sainsbury's": "bg-orange-500",
    Asda: "bg-green-500",
    Morrisons: "bg-yellow-500",
    Aldi: "bg-sky-600",
    Lidl: "bg-red-500",
  };

  const bgColor = colors[supermarket] || "bg-gray-500";

  return (
    <div className={`flex items-center justify-center ${bgColor} text-white rounded-lg w-12 h-12 ${className}`}>
      <Store className="w-6 h-6" />
    </div>
  );
}