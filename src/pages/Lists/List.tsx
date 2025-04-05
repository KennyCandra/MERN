import { useFetchWithRefToken } from "../../utils/hooks/fetchWithRefreshToken";
import userStore from "../../zustand/UserStore/UserStore";
import { useQuery } from "@tanstack/react-query";
import ListCardComponent from "../../components/ListCardComponent/ListCardComponent";
import { Movie } from "../home/Home";

export type ListType = {
  _id: string;
  name: string;
  description: string;
  movies: Movie[];
};

function List() {
  const { accessToken, userId } = userStore();
  const { fetchWithRefToken } = useFetchWithRefToken(accessToken);

  const { isLoading, data } = useQuery({
    queryKey: ["Lists"],
    queryFn: () =>
      fetchWithRefToken(`list/${userId}/lists`).then((response) => {
        return response;
      }),
  });

  if (isLoading) return <div>loading....</div>;

  return (
    <div className="mt-[60px] text-white ml-5">
      <h1 className="font-Poppins text-3xl mb-5 font-semibold">Your Lists</h1>
      <div className="flex gap-5 flex-wrap">
        {data?.lists.map((list: ListType) => {
          return (
            <ListCardComponent
              _id={list._id}
              className="w-[348px] h-[259px] relative text-black rounded-lg"
              movie={list.movies}
              description={list.description}
              name={list.name}
              key={list._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
