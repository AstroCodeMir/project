import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for "${query}" 🐾`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center bg-white rounded-lg shadow px-2">
      <input
        type="text"
        placeholder="Search pets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-2 rounded-l-lg outline-none text-gray-700 w-40 md:w-60"
      />
      <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded-r-lg hover:bg-amber-600">
        Search
      </button>
    </form>
  );
}
