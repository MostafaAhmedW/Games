import axios from "axios";
import { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { Link } from "react-router-dom";

export default function Genre() {
  const [genreCategory, setGenreCategory] = useState(null);

  async function genre() {
    const API_KEY = "bea65b03ddb648ce82c3bf96084daead";

    const res = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );

    setGenreCategory(res.data.results);
    console.log(res.data.results, "resssss");
  }

  useEffect(() => {
    genre();
  }, []);

  return (
    <>
      <div className="p-4 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6 text-blue-400 text-center ">Genres</h1>

        {genreCategory == null ? (
          <div className="h-screen flex justify-center items-center">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {genreCategory.map((genre) => (
              <Link
                to={`/game/${genre.slug}`}
                key={genre.id}
                className="bg-gray-100 cursor-pointer hover:-translate-y-2  transition-transform duration-500 ease-out shadow-lg shadow-gray-300 "
              >
                <img
                  src={genre.image_background}
                  alt={genre.name}
                  className="w-full h-56 "
                />

                <div className="flex justify-between items-center">
                  <h2 className="text-gray-600 font-normal text-md">
                    {" "}
                    {genre.name}{" "}
                  </h2>

                  <Link
                    to={`/game/${genre.slug}`}
                    className="my-2 rounded-tl-3xl rounded-br-3xl w-1/2  hover:text-blue-600 hover:bg-gray-50 text-blue-500 border border-b-gray-500  text-center rounded-md px-3 py-1 text-sm"
                  >
                    Show Games
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
