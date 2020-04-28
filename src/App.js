import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './assets/components/SearchBar';
import ImageList from './assets/components/ImageList';

const key = process.env.REACT_APP_UNSPLASH_API_KEY;

function App() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    
    axios.get(`https://api.unsplash.com/search/photos/?client_id=${key}&query=${term}`)
      .then(response => {
        const images = response.data.results;

        setResults(images);
      })
      .catch(error => {
        console.error('error: ', error);
        setResults([]);
      })
      .finally(() => {
        setSearched(true);
      });
  }

  return (
    <div className="container mx-auto mt-5">
      <SearchBar
        term={term}
        handleChange={(value) => setTerm(value)}
        handleSearch={e => handleSearch(e)}
      />
      <ImageList
        results={results}
        searched={searched}
      />
    </div>
  )
}

export default App;
