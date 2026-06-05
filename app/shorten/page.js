"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${window.location.origin}/${shorturl}`);
        seturl("");
        setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl ">Generate your short URLs</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className="bg-white px-4 py-2 focus-outline-purple-600 rounded-md"
          placeholder="Enter your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />

        <input
          type="text"
          value={shorturl}
          className="bg-white px-4 py-2 focus-outline-purple-600 rounded-md"
          placeholder="Enter your preferred short URL"
          onChange={(e) => {
            setshorturl(e.target.value);
          }}
        />

        <button
          onClick={generate}
          className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold cursor-pointer text-white"
        >
          Generate
        </button>
      </div>

      {generated && (
        <div className="bg-white p-4 rounded-lg border mt-4">
          <p className="font-bold text-lg mb-2">Your Short URL</p>

          <div className="flex items-center justify-between gap-2">
            <Link
              target="_blank"
              href={generated}
              className="text-purple-600 font-medium hover:underline"
            >
              bitlinks/.../{shorturl}
            </Link>

            <button
              onClick={() => {
                navigator.clipboard.writeText(generated);
                alert("Copied to clipboard!");
              }}
              className="bg-purple-500 text-white px-3 py-1 rounded-md cursor-pointer"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shorten;
