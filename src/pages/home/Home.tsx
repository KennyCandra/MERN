import MovieCard from "../../components/MovieCard/MovieCard";
import { RootState } from "../../redux/store/rootStore";
import { removeFromWatchList, addToWatchList } from "../../redux/UserSlice/UserSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/hooks";
import { useCallback, useEffect, useRef, useState } from "react";
import CustomButton from "../../components/button/CustomButton";
import { HugIcon } from "../../assets/images/icons";
import { AnimatePresence, motion } from "framer-motion";

export type Movie = {
  id: number;
  genre: string[];
  title: string;
  year: number;
  image: string;
};

function Home() {
  const user = useAppSelector((state: RootState) => state.userRed.user);
  const [index, setIndex] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null)

  const movies: Movie[] = [
    {
      id: 1,
      genre: ["Action", "Adventure"],
      title: "First movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 2,
      genre: ["Action", "Adventure"],
      title: "Second movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 3,
      genre: ["Action", "Adventure"],
      title: "Third movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 4,
      genre: ["Action", "Adventure"],
      title: "Fourth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 5,
      genre: ["Action", "Adventure"],
      title: "Fifth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 6,
      genre: ["Action", "Adventure"],
      title: "Sixth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 7,
      genre: ["Action", "Adventure"],
      title: "Seventh movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 8,
      genre: ["Action", "Adventure"],
      title: "Eighth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 9,
      genre: ["Action", "Adventure"],
      title: "Ninth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 10,
      genre: ["Action", "Adventure"],
      title: "Tenth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 11,
      genre: ["Action", "Adventure"],
      title: "Eleventh movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 12,
      genre: ["Action", "Adventure"],
      title: "Twelfth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 13,
      genre: ["Action", "Adventure"],
      title: "Thirteenth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 14,
      genre: ["Action", "Adventure"],
      title: "Fourteenth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 15,
      genre: ["Action", "Adventure"],
      title: "Fifteenth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 16,
      genre: ["Action", "Adventure"],
      title: "Sixteenth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 17,
      genre: ["Action", "Adventure"],
      title: "Seventeenth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 18,
      genre: ["Action", "Adventure"],
      title: "Eighteenth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 19,
      genre: ["Action", "Adventure"],
      title: "Nineteenth movie",
      year: 2024,
      image: "/images/background.jpg",
    },
    {
      id: 20,
      genre: ["Action", "Adventure"],
      title: "Twentieth movie",
      year: 2024,
      image: "/images/background.jpg",
    }
  ];

  useEffect(() => {
    let interval: any;
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % movies.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoScrolling, movies.length]);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
    }
  }, [index]);

  const handleAddToWatchList = useCallback(
    (id: string) => dispatch(addToWatchList(id)),
    [dispatch]
  );

  const handleRemoveFromWatchList = useCallback(
    (id: string) => dispatch(removeFromWatchList(id)),
    [dispatch]
  );

  const handleMovieCardClick = (movieIndex: number) => {
    setIsAutoScrolling(false);
    setIndex(movieIndex);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const carouselVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };


  // const handleScrollRight = () => {
  //   if (containerRef2.current) {
  //     containerRef2.current.style.scrollBehavior = "smooth"
  //     containerRef2.current.scrollLeft += containerRef2.current.clientWidth;
  //   }
  // };



  // const handleScrollLeft = () => {
  //   if (containerRef2.current) {
  //     containerRef2.current.style.scrollBehavior = "smooth"
  //     containerRef2.current.scrollLeft -= containerRef2.current.clientWidth;
  //   }
  // }

  return (
    <div>
      <div
        ref={containerRef}
        className="h-[455px] w-full flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
      >
        <AnimatePresence initial={false} custom={index}>
          {movies.map((movie, i) => (
            <motion.div
              key={movie.id}
              className="w-full h-full flex-shrink-0 relative bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to right bottom, rgba(97,0,194,0.8), rgba(25,24,23,0.8)), url('${movie.image}')`,
              }}
              variants={carouselVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              onClick={() => setIndex(i)}
            >
              <div className="absolute bottom-16 left-20 space-y-5">
                <h1 className="text-white text-4xl font-bold">{movie.title}</h1>
                <p className="text-white text-sm">
                  {movie.year} | {movie.genre.join(", ")}
                </p>
                <div className="flex items-center gap-4">
                  <CustomButton onClick={() => { }}>Watch Now</CustomButton>
                  <HugIcon
                    className="size-10 cursor-pointer active:scale-95 hover:scale-105 transition-all"
                    handleClick={() =>
                      user?.watchList.includes(movie.id.toString())
                        ? handleRemoveFromWatchList(movie.id.toString())
                        : handleAddToWatchList(movie.id.toString())
                    }
                    shouldFill={user?.watchList.includes(movie.id.toString()) ?? false}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-5">
        <h1 className="text-4xl font-bold ml-4 text-white font-Poppins">Trending</h1>
        <div ref={containerRef2} className="flex overflow-x-auto overflow-y-visible mt-5 gap-5 h-[500px]">
          {movies.map((movie, key) => (
            <MovieCard
              key={movie.id}
              isInWatchList={user?.watchList.includes(movie.id.toString()) ?? false}
              genre={movie.genre}
              title={movie.title}
              year={movie.year}
              image={movie.image}
              id={movie.id}
              movieKey={key}
              isActive={index === key}
              onClick={() => handleMovieCardClick(key)}
              className="w-[17.8vw] ml-4 overflow-hidden h-fit flex-shrink-0 border-white border-2 rounded-lg shadow-lg font-Poppins text-black relative select-none hover:scale-105 hover:opacity-100 cursor-pointer transition-all duration-300"
              addToWatchList={() => handleAddToWatchList(movie.id.toString())}
              removeFromWatchList={() => handleRemoveFromWatchList(movie.id.toString())}
              setIndex={setIndex}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;