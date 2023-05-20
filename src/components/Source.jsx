import { useContext } from "react";
import SearchContext from "../contexts/SearchContext.js";

const Source = () => {
  const results = useContext(SearchContext);

  return (
    <div>
      {results.length !== 0 && (
        <>
          <hr />
          <div className="flex gap-2">
            <p>Source: </p>
            {results[0]?.sourceUrls.map((url) => {
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
  );
};

export default Source;
