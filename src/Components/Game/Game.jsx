import axios from "axios";
import React, { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";

export default function Game() {
  const [games, setGames] = useState(null);
  const { genre } = useParams();

  async function getAllGames() {
    const API_KEY = "bea65b03ddb648ce82c3bf96084daead";
    const url = genre
      ? `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&genres=${genre}`
      : `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`;

    const res = await axios.get(url);

    setGames(res.data.results);
  }
  useEffect(() => {
    getAllGames();
  }, [genre]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-8 text-blue-400 text-center">Game List</h1>

      {games == null ? (
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
        <div className="bg-gray-50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {games?.map((game) => (
            <Link
              to={`/details/${game.slug}`}
              key={game.id}
              className=" hover:-translate-y-2  transition-transform duration-500 ease-out shadow-lg shadow-gray-300 flex flex-col  "
            >
              <img
                src={game.background_image}
                alt={game.name}
                className="w-full h-56 lg:object-cover cursor-pointer"
              />

              <div className=" ps-0.5 ">
                <h2 className=" font-normal  text-md  text-blue-500 mb-1">
                  {" "}
                  {game.name}{" "}
                </h2>

                {/* text-sm mb-1 */}
                <p className="text-sm mb-1 text-gray-800">
                  {" "}
                  <span className="font-semibold text-black ">
                    Released:
                  </span>{" "}
                  {game.released || "N/A"}
                </p>

                <p className="text-sm mb-1 text-yellow-500">
                  <span className="font-semibold text-black  ">Rating:</span>{" "}
                  {game.rating || "N/A"}
                </p>

                <p className="text-sm mb-1 text-gray-800">
                  <span className="font-semibold text-black  ">Platforms:</span>{" "}
                  {game.platforms.map((p) => p.platform.name).join(", ")}
                </p>
              </div>

              <Link
                to={`/details/${game.slug}`}
                className="my-2 rounded-tl-3xl rounded-br-3xl w-1/2 mx-auto hover:text-blue-600 hover:bg-gray-50 text-blue-500 border border-b-gray-500  text-center rounded-md px-3 py-1 text-sm"
              >
                Show Details
              </Link>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
