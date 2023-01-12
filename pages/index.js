import Head from "next/head";
import { useState } from "react";
import Images from "../components/Images";
import { SearchInput } from "../components/SearchInput";
import Spinner from "../lib/Spinner";
import Filter from "../components/Filter";
import { IMAGE_SIZES } from "../utils/constants";

const emptyFormState = { query: "", size: IMAGE_SIZES.SMALL };
const emptyFetchedData = { size: "", images: [] };

export default function Home() {
  const [formState, setFormState] = useState(emptyFormState);
  const [loading, setLoading] = useState(false);

  const [fetchedData, setFetchedData] = useState(emptyFetchedData);
  const [error, setError] = useState(null);

  const handleFormStateChange = (event) => {
    const value = event.target.value;

    setFormState({
      ...formState,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFetchedData(emptyFetchedData);
    setError(null);

    try {
      setLoading(true);

      const response = await fetch("/api/generateImages", {
        method: "POST",
        body: JSON.stringify(formState),
      });
      const { data } = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setFetchedData({ size: formState.size, images: data });
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Image AI Generator</title>
        <meta name="description" content="Generating images using AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-center">
          <h1 className="text-3xl font-bold p-2">
            Generate images created by AI
          </h1>
          <h2 className="text-2xl font-bold p-2">
            Search for any image. Be creative.
          </h2>
        </div>

        <SearchInput
          formState={formState}
          onChange={handleFormStateChange}
          onSubmit={handleSubmit}
          loading={!formState.query || loading}
        />
        <Filter formState={formState} onChange={handleFormStateChange} />

        {loading && <Spinner />}

        {error && (
          <div className="text-center">
            <p className="text-lg">{error}</p>
          </div>
        )}

        {fetchedData.images.length > 0 && <Images data={fetchedData} />}
      </main>
    </>
  );
}
