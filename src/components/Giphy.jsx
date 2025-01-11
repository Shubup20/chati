import { useEffect, useRef, useState } from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import _ from "lodash";

const gf = new GiphyFetch("LZdP7jknogaCD9ViN5TKzzDj4jfNDqzz");

const Giphy = () => {
  const gridRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [gifs, setGifs] = useState([]); //store fetx=cg gifs

  const fetchGifs = async (offset) => {
    return gf.search(value, { offset, limit: 10 });
  };

  const debouncedfetchgifs = _.debounce(async () => {
    setIsLoading(true);
    setError(null); //clear any previous error

    try {
      const newGifs = await fetchGifs(0);
      setGifs(newGifs.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, 500); // Debounce time (500ms)

  useEffect(() => {
    // fetch initially on search term
    const fetchInitialGifs = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const initialGifs = await fetchGifs(0);
        setGifs(initialGifs.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialGifs();
  }, []);

  const handleGifClick = (gifs, e) => {
    e.preventDefault();
    // console.log(gifs);
    const gifUrl = gifs.images.original.url;
    console.log(gifUrl);
  };

  return (
    <div ref={gridRef} className="w-full mt-3">
      <input
        type="text"
        placeholder="Search for Gif..."
        className="border border-stroke rounded-md p-2 w-full mb-2 outline-none "
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debouncedfetchgifs(); //calling debounced function on every change
        }}
      />

      {isLoading && <p>Loading GIFs...</p>}
      {error && <p className="text-red">Error:{error}</p>}

      <div className="h-30 overflow-auto no-scrollbar">
        <Grid
          width={gridRef.current?.offsetWidth}
          columns={8}
          gutter={6}
          fetchGifs={fetchGifs}
          key={value}
          onGifClick={handleGifClick}
          data={gifs}
        />
      </div>
    </div>
  );
};

export default Giphy;
