import { useEffect, useRef, useState } from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import _ from "lodash";

const gf = new GiphyFetch("oX32FQo0RlDzQX8TJ2witpakr1hqvsqB");

const Giphy = () => {
  const gridRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [gifs, setGifs] = useState([]); //store fetx=cg gifs

  const fetchGifs = async (offset) => {
    return gf.search(value, { offset, limit: 10 });
  };

  useEffect(() => {
    // fetch initially on search term
    const fetchInitialGifs = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const initialGifs = await fetchGifs(0);
        setGifs(initialGifs.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialGifs();
  }, []);

  return (
    <div ref={gridRef} className="w-full mt-3">
      <input
        type="text"
        placeholder="Search for Gif..."
        className="border border-stroke rounded-md p-2 w-full mb-2 outline-none "
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      {isLoading && <p>Loading GIFs...</p>}
      {error && <p className="text-red">Error:{error}</p>}

      <div className="h-48 overflow-auto no-scrollbar">
        <Grid
          width={gridRef.current?.offsetWidth}
          columns={8}
          gutter={6}
          fetchGifs={fetchGifs}
          key={value}
          onGifClick={() => {}}
          data={gifs}
        />
      </div>
    </div>
  );
};

export default Giphy;
