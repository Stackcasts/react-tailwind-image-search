import React from 'react';

export default function SearchBar({ term, handleChange, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="w-full mb-8">
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          value={term}
          onChange={e => handleChange(e.target.value)}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Enter a search query..."
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-8 rounded"
        >
          Search
        </button>
      </div>
    </form>
  )
}