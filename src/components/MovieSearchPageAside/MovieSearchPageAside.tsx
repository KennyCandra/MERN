import { useState } from "react";
import type { genre, GenreMap } from "../../pages/MoviesPage/MoviesPage";

type expandable = {
  sort: boolean;
  whereToWatch: boolean;
  filters: boolean;
};

type options = {
  name: string;
  option: string;
};

type props = {
  genres: genre[];
  setActiveGenres: React.Dispatch<React.SetStateAction<GenreMap>>;
  activeGenres: GenreMap;
  handleSearch: (genre: GenreMap) => void;
};

const options: options[] = [
  {
    name: "Popularity Descending",
    option: "popularity.desc",
  },
  {
    name: "Popularity Ascending",
    option: "popularity.asc",
  },
  {
    name: "Rating Descending",
    option: "vote_average.desc",
  },
  {
    name: "Rating Ascending",
    option: "vote_average.asc",
  },
  {
    name: "Release Date Descending",
    option: "primary_release_date.desc",
  },
  {
    name: "Release Date Ascending",
    option: "primary_release_date.asc",
  },
  {
    name: "A-Z title",
    option: "title.asc",
  },
  {
    name: "Z-A title",
    option: "title.desc",
  },
];

function MovieSearchPageAside({
  genres,
  setActiveGenres,
  activeGenres,
  handleSearch,
}: props) {
  const [expand, setExpand] = useState<expandable>({
    sort: false,
    whereToWatch: false,
    filters: false,
  });

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-3xl mb-5">Filter options</h1>
      <div className="border shadow-lg">
        <h1
          className="cursor-pointer font-bold p-4 border-b"
          onClick={() => setExpand({ ...expand, sort: !expand.sort })}
        >
          Sort
        </h1>
        {expand.sort && (
          <div className="flex flex-col p-4">
            <p className="mb-5">Sort Results By</p>
            <select>
              {options.map((option) => {
                return (
                  <option
                    key={option.option}
                    value={option.option}
                    className="bg-white text-black"
                  >
                    {option.name}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>
      <div className="border shadow-lg">
        <h1
          className="cursor-pointer p-4 font-bold border-b"
          onClick={() =>
            setExpand({ ...expand, whereToWatch: !expand.whereToWatch })
          }
        >
          Where To Watch
        </h1>
        {expand.whereToWatch && <div>Hello</div>}
      </div>
      <div className="border shadow-lg">
        <h1
          className="cursor-pointer  font-bold p-4 border-b"
          onClick={() => setExpand({ ...expand, filters: !expand.filters })}
        >
          Filters
        </h1>
        {expand.filters && (
          <div className="grid grid-cols-1 gap-3 p-4">
            {genres.map((genre) => {
              return (
                <button
                  key={genre._id}
                  onClick={() => {
                    setActiveGenres((prev) => ({
                      ...prev,
                      [genre.id]: !prev[genre.id],
                    }));
                  }}
                  className={`rounded-full border hover:bg-blue-600 text-xs md:text-base hover:text-white transition px-3 ${
                    activeGenres[genre.id] ? "bg-blue-600 text-black" : null
                  }`}
                >
                  {genre.name}
                </button>
              );
            })}
          </div>
        )}
      </div>
      <button
        className="hover:bg-blue-600 hover:text-white transition border rounded-full"
        onClick={() => handleSearch(activeGenres)}
      >
        Search
      </button>
    </div>
  );
}

export default MovieSearchPageAside;
