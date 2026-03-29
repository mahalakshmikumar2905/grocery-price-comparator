export interface Product {
  id: string;
  name: string;
  category: string;
}

export interface SupermarketPrice {
  supermarket: string;
  price: number;
  unitPrice: string;
  logo: string;
}

export interface ProductPrices {
  product: Product;
  prices: SupermarketPrice[];
}

export const PRODUCTS: Product[] = [
  { id: "1", name: "Whole Milk", category: "Dairy" },
  { id: "2", name: "Semi-Skimmed Milk", category: "Dairy" },
  { id: "3", name: "Skimmed Milk", category: "Dairy" },
  { id: "4", name: "Brown Bread", category: "Bakery" },
  { id: "5", name: "White Bread", category: "Bakery" },
  { id: "6", name: "Wholemeal Bread", category: "Bakery" },
  { id: "7", name: "Large Eggs (6 pack)", category: "Dairy" },
  { id: "8", name: "Large Eggs (12 pack)", category: "Dairy" },
  { id: "9", name: "Chicken Breast", category: "Meat" },
  { id: "10", name: "Chicken Thighs", category: "Meat" },
  { id: "11", name: "Minced Beef", category: "Meat" },
  { id: "12", name: "Pork Chops", category: "Meat" },
  { id: "13", name: "White Rice", category: "Pantry" },
  { id: "14", name: "Brown Rice", category: "Pantry" },
  { id: "15", name: "Basmati Rice", category: "Pantry" },
  { id: "16", name: "Tomatoes", category: "Fresh" },
  { id: "17", name: "Cucumbers", category: "Fresh" },
  { id: "18", name: "Carrots", category: "Fresh" },
  { id: "19", name: "Potatoes", category: "Fresh" },
  { id: "20", name: "Onions", category: "Fresh" },
  { id: "21", name: "Bananas", category: "Fresh" },
  { id: "22", name: "Apples", category: "Fresh" },
  { id: "23", name: "Oranges", category: "Fresh" },
  { id: "24", name: "Butter", category: "Dairy" },
  { id: "25", name: "Cheddar Cheese", category: "Dairy" },
  { id: "26", name: "Greek Yoghurt", category: "Dairy" },
  { id: "27", name: "Orange Juice", category: "Drinks" },
  { id: "28", name: "Apple Juice", category: "Drinks" },
  { id: "29", name: "Coffee Beans", category: "Pantry" },
  { id: "30", name: "Tea Bags", category: "Pantry" },
  { id: "31", name: "Pasta", category: "Pantry" },
  { id: "32", name: "Spaghetti", category: "Pantry" },
  { id: "33", name: "Tomato Sauce", category: "Pantry" },
  { id: "34", name: "Olive Oil", category: "Pantry" },
  { id: "35", name: "Vegetable Oil", category: "Pantry" },
  { id: "36", name: "Frozen Peas", category: "Frozen" },
  { id: "37", name: "Frozen Chips", category: "Frozen" },
  { id: "38", name: "Ice Cream", category: "Frozen" },
  { id: "39", name: "Salmon Fillet", category: "Fish" },
  { id: "40", name: "Cod Fillet", category: "Fish" },
  { id: "41", name: "Tuna (canned)", category: "Pantry" },
  { id: "42", name: "Baked Beans", category: "Pantry" },
  { id: "43", name: "Cereal", category: "Breakfast" },
  { id: "44", name: "Porridge Oats", category: "Breakfast" },
  { id: "45", name: "Honey", category: "Pantry" },
  { id: "46", name: "Jam", category: "Pantry" },
  { id: "47", name: "Peanut Butter", category: "Pantry" },
  { id: "48", name: "Chocolate Bar", category: "Snacks" },
  { id: "49", name: "Crisps", category: "Snacks" },
  { id: "50", name: "Biscuits", category: "Snacks" },
];

const SUPERMARKETS = ["Tesco", "Sainsbury's", "Asda", "Morrisons", "Aldi", "Lidl"];

function generatePrices(basePrice: number, unitPrice: string): SupermarketPrice[] {
  return SUPERMARKETS.map((supermarket) => {
    const variance = (Math.random() - 0.5) * 0.4;
    const price = Math.round((basePrice + variance) * 100) / 100;
    return {
      supermarket,
      price,
      unitPrice,
      logo: supermarket,
    };
  }).sort((a, b) => a.price - b.price);
}

export const PRICE_DATA: Record<string, ProductPrices> = {
  "1": {
    product: PRODUCTS[0],
    prices: generatePrices(1.45, "£1.45 per litre"),
  },
  "2": {
    product: PRODUCTS[1],
    prices: generatePrices(1.35, "£1.35 per litre"),
  },
  "3": {
    product: PRODUCTS[2],
    prices: generatePrices(1.30, "£1.30 per litre"),
  },
  "4": {
    product: PRODUCTS[3],
    prices: generatePrices(1.20, "£0.80 per 100g"),
  },
  "5": {
    product: PRODUCTS[4],
    prices: generatePrices(1.10, "£0.73 per 100g"),
  },
  "6": {
    product: PRODUCTS[5],
    prices: generatePrices(1.25, "£0.83 per 100g"),
  },
  "7": {
    product: PRODUCTS[6],
    prices: generatePrices(2.50, "£0.42 per egg"),
  },
  "8": {
    product: PRODUCTS[7],
    prices: generatePrices(4.20, "£0.35 per egg"),
  },
  "9": {
    product: PRODUCTS[8],
    prices: generatePrices(5.50, "£5.50 per kg"),
  },
  "10": {
    product: PRODUCTS[9],
    prices: generatePrices(3.80, "£3.80 per kg"),
  },
  "11": {
    product: PRODUCTS[10],
    prices: generatePrices(4.50, "£4.50 per kg"),
  },
  "12": {
    product: PRODUCTS[11],
    prices: generatePrices(4.20, "£4.20 per kg"),
  },
  "13": {
    product: PRODUCTS[12],
    prices: generatePrices(1.80, "£1.80 per kg"),
  },
  "14": {
    product: PRODUCTS[13],
    prices: generatePrices(2.10, "£2.10 per kg"),
  },
  "15": {
    product: PRODUCTS[14],
    prices: generatePrices(2.50, "£2.50 per kg"),
  },
  "16": {
    product: PRODUCTS[15],
    prices: generatePrices(1.50, "£1.50 per kg"),
  },
  "17": {
    product: PRODUCTS[16],
    prices: generatePrices(0.60, "£0.60 each"),
  },
  "18": {
    product: PRODUCTS[17],
    prices: generatePrices(0.90, "£0.90 per kg"),
  },
  "19": {
    product: PRODUCTS[18],
    prices: generatePrices(1.20, "£1.20 per kg"),
  },
  "20": {
    product: PRODUCTS[19],
    prices: generatePrices(0.85, "£0.85 per kg"),
  },
  "21": {
    product: PRODUCTS[20],
    prices: generatePrices(0.75, "£0.75 per kg"),
  },
  "22": {
    product: PRODUCTS[21],
    prices: generatePrices(1.80, "£1.80 per kg"),
  },
  "23": {
    product: PRODUCTS[22],
    prices: generatePrices(1.60, "£1.60 per kg"),
  },
  "24": {
    product: PRODUCTS[23],
    prices: generatePrices(2.20, "£2.20 per 250g"),
  },
  "25": {
    product: PRODUCTS[24],
    prices: generatePrices(3.50, "£3.50 per 400g"),
  },
  "26": {
    product: PRODUCTS[25],
    prices: generatePrices(1.80, "£1.80 per 500g"),
  },
  "27": {
    product: PRODUCTS[26],
    prices: generatePrices(1.60, "£1.60 per litre"),
  },
  "28": {
    product: PRODUCTS[27],
    prices: generatePrices(1.40, "£1.40 per litre"),
  },
  "29": {
    product: PRODUCTS[28],
    prices: generatePrices(5.50, "£5.50 per 227g"),
  },
  "30": {
    product: PRODUCTS[29],
    prices: generatePrices(2.80, "£2.80 per 80 bags"),
  },
  "31": {
    product: PRODUCTS[30],
    prices: generatePrices(0.95, "£0.95 per 500g"),
  },
  "32": {
    product: PRODUCTS[31],
    prices: generatePrices(0.85, "£0.85 per 500g"),
  },
  "33": {
    product: PRODUCTS[32],
    prices: generatePrices(0.90, "£0.90 per 400g"),
  },
  "34": {
    product: PRODUCTS[33],
    prices: generatePrices(4.50, "£4.50 per 500ml"),
  },
  "35": {
    product: PRODUCTS[34],
    prices: generatePrices(1.80, "£1.80 per litre"),
  },
  "36": {
    product: PRODUCTS[35],
    prices: generatePrices(1.00, "£1.00 per 900g"),
  },
  "37": {
    product: PRODUCTS[36],
    prices: generatePrices(1.80, "£1.80 per 1.5kg"),
  },
  "38": {
    product: PRODUCTS[37],
    prices: generatePrices(3.00, "£3.00 per litre"),
  },
  "39": {
    product: PRODUCTS[38],
    prices: generatePrices(6.50, "£6.50 per 300g"),
  },
  "40": {
    product: PRODUCTS[39],
    prices: generatePrices(5.80, "£5.80 per 400g"),
  },
  "41": {
    product: PRODUCTS[40],
    prices: generatePrices(1.20, "£1.20 per 145g"),
  },
  "42": {
    product: PRODUCTS[41],
    prices: generatePrices(0.70, "£0.70 per 400g"),
  },
  "43": {
    product: PRODUCTS[42],
    prices: generatePrices(2.50, "£2.50 per 500g"),
  },
  "44": {
    product: PRODUCTS[43],
    prices: generatePrices(1.80, "£1.80 per 1kg"),
  },
  "45": {
    product: PRODUCTS[44],
    prices: generatePrices(3.20, "£3.20 per 340g"),
  },
  "46": {
    product: PRODUCTS[45],
    prices: generatePrices(1.50, "£1.50 per 340g"),
  },
  "47": {
    product: PRODUCTS[46],
    prices: generatePrices(2.20, "£2.20 per 340g"),
  },
  "48": {
    product: PRODUCTS[47],
    prices: generatePrices(1.50, "£1.50 per 100g"),
  },
  "49": {
    product: PRODUCTS[48],
    prices: generatePrices(1.80, "£1.80 per 150g"),
  },
  "50": {
    product: PRODUCTS[49],
    prices: generatePrices(0.85, "£0.85 per 300g"),
  },
};

export function getProductPrices(productId: string): ProductPrices | null {
  return PRICE_DATA[productId] || null;
}