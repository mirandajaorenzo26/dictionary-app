import { useState, useRef } from "react";

function SearchBar({ onSearch }) {
  const [searchWord, setSearchWord] = useState("");
  const inputRef = useRef();
  return (
    <form action="" className="flex gap-2">
      <input
        ref={inputRef}
        type="text"
        className="px-5 py-2 border rounded-md"
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          onSearch(e, searchWord);
          inputRef.current.value = "";
        }}
        className="px-5 py-2 bg-gray-500 text-white rounded-md"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
