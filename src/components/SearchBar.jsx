import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
function SearchBar({ onSearch }) {
  const [searchWord, setSearchWord] = useState("");
  const inputRef = useRef();
  return (
    <form
      action=""
      className="flex justify-between gap-2 rounded-lg bg-neutral-200 py-2 pl-5 dark:bg-neutral-800 "
    >
      <input
        className="min-w-0 flex-1 bg-transparent text-lg outline-none"
        ref={inputRef}
        type="text"
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
        className="px-3"
      >
        <FaSearch size={24} className=" fill-violet-600" />
      </button>
    </form>
  );
}

export default SearchBar;
