import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ListType } from "../Lists/List";
import FavouriteMovieComponents from "../../components/FavouriteMovieComponents/FavouriteMovieComponents";
import { useCallback, useState } from "react";
import { useWatchListFunctions } from "../../utils/services/watchListFns";
import userStore from "../../zustand/UserStore/UserStore";
import CustomButton from "../../components/button/CustomButton";
import ListModal from "../../components/ListModal/ListModal";

type response = {
  message: string;
  list: ListType;
};

function SoloList() {
  const { listId } = useParams();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { addMovieToWatchList, removeMovieFromWatchList } =
    useWatchListFunctions();
  const { watchList } = userStore();
  const { data, isLoading } = useQuery<response>({
    queryFn: () =>
      fetch(`http://localhost:8001/list/${listId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          return response;
        }),
    queryKey: [`single-${listId}`],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 5,
  });

  const addCurrentMovieToWatchList = useCallback((movieId: string) => {
    addMovieToWatchList(movieId);
  }, []);

  const removeCurrentMovieFromWatchList = useCallback((movieId: string) => {
    removeMovieFromWatchList(movieId);
  }, []);

  if (isLoading) return <div>loading...</div>;

  return (
    <div className="text-white space-y-5 pl-5">
      <h1>{data?.list.name}</h1>
      <p className="text-sm">
        {data?.list.description !== ""
          ? data?.list.description
          : "no description bro till now"}
      </p>

      {data?.list.movies.length! > 0 ? (
        data?.list.movies.map((movie) => {
          return (
            <FavouriteMovieComponents
              addToWatchList={addCurrentMovieToWatchList}
              movieId={movie._id}
              removeFromWatchList={removeCurrentMovieFromWatchList}
              key={movie._id}
              isInWatchList={
                watchList.includes(movie._id.toString()) ? true : false
              }
              genre={movie.genres}
              title={movie.title}
              year={movie.release_date}
              image={movie.backdrop_path}
              id={Number(movie._id)}
              className="w-[348px] h-[259px] relative text-black rounded-lg"
            />
          );
        })
      ) : (
        <div>you can add movies!</div>
      )}

      <CustomButton onClick={() => setModalOpen(true)}>
        Edit your list
      </CustomButton>
      {modalOpen && (
        <ListModal
          editing={true}
          setOpenListModal={setModalOpen}
          List={data?.list!}
        />
      )}
    </div>
  );
}

export default SoloList;
