import { useState } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";

import SearchContext from "./contexts/SearchContext.js";
import Source from "./components/Source";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle the search
  const handleSearch = (e, searchWord) => {
    e.preventDefault();
    const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en";
    // Perform the search logic and update the search results
    async function fetchData(word) {
      try {
        const response = await axios.get(`${apiUrl}/${word}`);
        const data = response.data;
        setSearchResults(data);
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    }

    fetchData(searchWord);
  };

  return (
    <>
      <SearchContext.Provider value={searchResults}>
        <SearchBar onSearch={handleSearch} />
        <SearchResult />
        <Source />
      </SearchContext.Provider>
    </>
  );
}

export default App;
