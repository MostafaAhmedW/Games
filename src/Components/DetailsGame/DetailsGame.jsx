import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailsGame() {
  const [gameDeatils, setGameDeatils] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  async function gameDetails() {
    const API_KEY = "bea65b03ddb648ce82c3bf96084daead";

    const res = await axios.get(
      `https://api.rawg.io/api/games/${slug}?key=${API_KEY}`
    );

    setGameDeatils(res.data);
  }

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    gameDetails();
  }, [slug]);

  return (
    <>
      {gameDeatils == null ? (
        <div className="flex h-screen justify-center items-center">
          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
            backgroundColor="blue"
          />
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col md:flex-row items-start gap-2.5 bg-gray-100   ">
            <div className="md:w-1/3 w-full ">
              <img
                src={gameDeatils.background_image}
                alt={gameDeatils.name}
                className="w-full h-96 shadow-lg rounded-md mt-6"
              />
            </div>

            <div className="flex-1 mt-6 ">
              <div className="flex justify-between ">
                <h1 className="text-2xl font-bold mb-3 ms-1.5 text-blue-400">
                  {" "}
                  {gameDeatils.name}{" "}
                </h1>
                <button
                  onClick={handleGoBack}
                  className=" me-4 cursor-pointer text-blue-500 bg-blue-200  font-bold rounded-full w-8 h-8 flex justify-center items-center  transition duration-300"
                >
                  X
                </button>
              </div>
              <p className="mb-1 ms-1.5">
                {" "}
                <strong>Released:</strong> {gameDeatils.released}{" "}
              </p>
              <p className=" text-yellow-500 mb-1 ms-1.5">
                {" "}
                <strong className="text-black">Rating:</strong>{" "}
                {gameDeatils.rating}{" "}
              </p>
              <p className="mb-1 ms-1.5">
                <strong>Platforms:</strong>{" "}
                {gameDeatils.platforms?.map((p) => p.platform.name).join(", ")}
              </p>
              <p className="mb-1 ms-1.5 leading-relaxed">
                <strong>Description:</strong> {gameDeatils.description_raw}{" "}
              </p>

              <a
                href={gameDeatils.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white ms-1.5 my-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-tl-3xl rounded-br-3xl text-sm px-4 py-2.5 text-center leading-5 inline-block"
              >
                Visit Official Site
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
