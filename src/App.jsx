import { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import Source from "./components/Source";

import SearchContext from "./contexts/SearchContext.js";

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
        <Header />
        <SearchBar onSearch={handleSearch} />
        <SearchResult />
        <Source />
      </SearchContext.Provider>
    </>
  );
}

export default App;
