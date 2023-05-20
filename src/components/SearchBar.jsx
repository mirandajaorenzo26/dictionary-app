import { useState, useRef } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();
  return (
    <form action="">
      <input
        ref={inputRef}
        type="text"
        className="px-5 py-2 border rounded-md"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          onSearch(e, searchTerm);
          inputRef.current.value = "";
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
