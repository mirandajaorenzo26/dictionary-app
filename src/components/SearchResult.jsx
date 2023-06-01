import { useContext, useRef } from "react";
import SearchContext from "../contexts/SearchContext.js";
import { HiVolumeUp } from "react-icons/hi";
function SearchResult() {
  const { searchResults, error } = useContext(SearchContext);

  const audioBtn = useRef();
  return (
    <div className="min-h-screen">
      {Object.keys(error).length !== 0 ? (
        <>
          <p className="my-5 text-center font-bold uppercase  text-black dark:text-white">
            {error.title}
          </p>
          <p className="text-center text-neutral-600">
            {error.message} {error.resolution}
          </p>
        </>
      ) : (
        <>
          {searchResults.length === 0 && (
            <p className=" my-5 text-center font-bold uppercase text-black dark:text-white">
              Search for a word
            </p>
          )}
          <div className="mt-5 flex items-center justify-between">
            <div className="">
              <h1 className="my-2 text-4xl font-bold lg:text-6xl">
                {searchResults[0]?.word}
              </h1>
              <p className="font-bold text-violet-600">
                {searchResults[0]?.phonetic}
              </p>
            </div>
            {searchResults[0]?.phonetics.filter((phonetic) => phonetic.audio)[0]
              ?.audio && (
              <button
                onClick={() => {
                  audioBtn.current.play();
                }}
                className="grid h-12 w-12 items-center justify-center rounded-full bg-violet-600"
              >
                <HiVolumeUp size={24} className="fill-white" />
                <audio
                  ref={audioBtn}
                  src={
                    searchResults[0]?.phonetics.filter(
                      (phonetic) => phonetic.audio
                    )[0].audio
                  }
                ></audio>
              </button>
            )}
          </div>

          {searchResults[0]?.meanings.map((meaning) => {
            return (
              <div key={self.crypto.randomUUID()} className="my-5">
                <p className="text-xl font-bold">{meaning.partOfSpeech}</p>
                <p className=" mb-2 text-neutral-400">Meaning</p>
                <li className="ml-5 ">{meaning.definitions[0].definition}</li>

                {/* Examples */}
                {meaning.definitions[0].example && (
                  <li className="ml-5 mt-2 list-none text-neutral-400">
                    &ldquo;{meaning.definitions[0].example}&rdquo;
                  </li>
                )}

                {/* Synonyms */}
                {meaning.definitions[0].synonyms.length !== 0 && (
                  <div className=" mt-5 flex  flex-wrap gap-2 italic">
                    <p className=" mr-2 text-neutral-400">Synonyms:</p>
                    {meaning.definitions[0].synonyms?.map((synonym) => (
                      <p
                        key={self.crypto.randomUUID()}
                        className="font-semibold text-violet-600
                  "
                      >
                        {synonym}
                      </p>
                    ))}
                  </div>
                )}

                {/* Antonyms */}
                {meaning.definitions[0].antonyms.length !== 0 && (
                  <div className=" mt-5 flex flex-wrap gap-2 italic ">
                    <p className=" mr-2 text-neutral-400">Antonyms:</p>
                    {meaning.definitions[0].antonyms?.map((antonym) => (
                      <p
                        key={self.crypto.randomUUID()}
                        className="font-semibold text-violet-600"
                      >
                        {antonym}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div>
            {searchResults.length !== 0 && (
              <>
                <hr />
                <div className="mt-5 gap-2 lg:flex">
                  <p>Source: </p>
                  {searchResults[0]?.sourceUrls.map((url) => {
                    return (
                      <span key={self.crypto.randomUUID()} className="block">
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          {url}
                        </a>
                      </span>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchResult;
