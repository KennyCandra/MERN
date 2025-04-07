import { useFetchWithRefToken } from "../../utils/hooks/fetchWithRefreshToken";
import userStore from "../../zustand/UserStore/UserStore";
import { useQuery } from "@tanstack/react-query";
import ListCardComponent from "../../components/ListCardComponent/ListCardComponent";
import { Movie } from "../home/Home";
import CustomButton from "../../components/button/CustomButton";
import ListModal from "../../components/ListModal/ListModal";
import { useState } from "react";

export type ListType = {
  _id: string;
  name: string;
  description: string;
  movies: Movie[];
};

function List() {
  const { accessToken, userId } = userStore();
  const { fetchWithRefToken } = useFetchWithRefToken(accessToken);
  const [addNewListModal, setAddNewListModal] = useState<boolean>(false);

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

      <CustomButton onClick={() => setAddNewListModal(true)}>
        Add New List
      </CustomButton>
      {addNewListModal && (
        <ListModal setOpenListModal={setAddNewListModal} editing={false} />
      )}
    </div>
  );
}

export default List;
