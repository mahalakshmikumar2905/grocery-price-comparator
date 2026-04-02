import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Props {
  onSearch: (query: string) => void;
}

const ProductSearch = ({ onSearch }: Props) => {
  const [input, setInput] = useState('');

  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for milk, bread, or eggs..."
        className="w-full p-4 pl-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
      />
      <Search className="absolute left-4 top-4 text-gray-400" />
      <button 
        onClick={() => onSearch(input)}
        className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default ProductSearch;