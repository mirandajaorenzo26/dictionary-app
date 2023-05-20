import { useContext, useRef } from "react";
import SearchContext from "../contexts/SearchContext.js";
import { HiVolumeUp } from "react-icons/hi";
function SearchResult() {
  const results = useContext(SearchContext);

  const audioBtn = useRef();
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">{results[0]?.word}</h1>
        <p>{results[0]?.phonetic}</p>
      </div>
      {results[0]?.phonetics.filter((phonetic) => phonetic.audio)[0]?.audio && (
        <button
          onClick={() => {
            audioBtn.current.play();
          }}
        >
          <HiVolumeUp />
          <audio
            ref={audioBtn}
            src={
              results[0]?.phonetics.filter((phonetic) => phonetic.audio)[0]
                .audio
            }
          ></audio>
        </button>
      )}
      {/* MEANINGS */}
      {results[0]?.meanings.map((meaning) => {
        return (
          <div key={self.crypto.randomUUID()} className="my-5">
            <p className="font-bold">{meaning.partOfSpeech}</p>
            <h2>Meaning</h2>
            <li className="ml-5">{meaning.definitions[0].definition}</li>

            {/* Examples */}
            {meaning.definitions[0].example && (
              <q className="text-gray-400 ml-5">
                {meaning.definitions[0].example}
              </q>
            )}

            {/* Synonyms */}
            {meaning.definitions[0].synonyms.length !== 0 && (
              <div className="flex flex-wrap gap-2 ">
                <p className="font-semibold text-gray-400 mr-2">Synonyms:</p>
                {meaning.definitions[0].synonyms?.map((synonym) => (
                  <p
                    key={self.crypto.randomUUID()}
                    className="text-violet-600 font-semibold
                  "
                  >
                    {synonym}
                  </p>
                ))}
              </div>
            )}

            {/* Antonyms */}
            {meaning.definitions[0].antonyms.length !== 0 && (
              <div className="flex flex-wrap gap-2 ">
                <p className="font-semibold text-gray-400 mr-2">Antonyms:</p>
                {meaning.definitions[0].antonyms?.map((antonym) => (
                  <p
                    key={self.crypto.randomUUID()}
                    className="text-violet-600 font-semibold
                  "
                  >
                    {antonym}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default SearchResult;
