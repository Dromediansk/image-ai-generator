import Head from "next/head";
import { useState } from "react";
import Content from "../components/Content";
import { emptyFormState, Form } from "../components/Form";
import Spinner from "../components/Spinner";

export default function Home() {
  const [formState, setFormState] = useState(emptyFormState);
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState([]);

  const handleFormStateChange = (event) => {
    setFormState({ query: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/generateImages", {
        method: "POST",
        body: formState.query,
      });
      const data = await response.json();

      if (!data.error) {
        setImages(data.data);
      }
    } catch (error) {
      console.log(error);
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

        <Form
          formState={formState}
          onChange={handleFormStateChange}
          onSubmit={handleSubmit}
          loading={!formState.query || loading}
        />

        {loading && <Spinner />}

        {!loading && images.length > 0 && <Content images={images} />}
      </main>
    </>
  );
}
