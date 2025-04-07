import type { ListType } from "../../pages/Lists/List";
import { useRef } from "react";
import userStore from "../../zustand/UserStore/UserStore";
import { useFetchWithRefToken } from "../../utils/hooks/fetchWithRefreshToken";

type ModalProps = {
  setOpenListModal: React.Dispatch<React.SetStateAction<boolean>>;
  List?: ListType;
  editing: boolean;
};

function ListModal({ setOpenListModal, List, editing }: ModalProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const { accessToken } = userStore();
  const { fetchWithRefToken } = useFetchWithRefToken(accessToken);

  const handleSubmitEdit = async () => {
    try {
      const response = await fetchWithRefToken("list/update-list", {
        method: "PUT",
        body: JSON.stringify({
          listId: List?._id,
          name: nameRef.current?.value,
          description: descRef.current?.value,
        }),
      });

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitAdd = async () => {
    try {
      const response = await fetchWithRefToken("list/create-list", {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current?.value,
          description: descRef.current?.value,
        }),
      });
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="top-0 flex justify-center items-center z-[51] flex-col left-0 w-screen h-screen bg-black bg-opacity-80 fixed bg-gray-800 text-white rounded-lg ">
      <h2 className="text-lg font-semibold mb-4">
        {editing ? `Edit your List` : `Add New List`}
      </h2>
      <form>
        <label className="block mb-2">
          <span className="text-sm font-medium">Name</span>
          <input
            type="text"
            ref={nameRef}
            defaultValue={editing ? List?.name : ""}
            className="w-full mt-1 p-2 rounded-md bg-gray-700 text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="block mb-2">
          <span className="text-sm font-medium">Description</span>
          <textarea
            defaultValue={editing ? List?.description : ""}
            ref={descRef}
            className="w-full mt-1 p-2 rounded-md bg-gray-700 text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </label>

        <button
          type="button"
          onClick={editing ? handleSubmitEdit : handleSubmitAdd}
          className="mt-4 px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => setOpenListModal(false)}
          className="mt-4 mx-5 px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition"
        >
          {editing ? `Don't change it` : `Don't add new list`}
        </button>
      </form>
    </div>
  );
}

export default ListModal;
