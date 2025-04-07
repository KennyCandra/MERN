import {
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
} from "../../assets/images/icons";
import { NavLink } from "react-router-dom";
import userStore from "../../zustand/UserStore/UserStore";

function Header() {
  const { name } = userStore();

  const variables = [
    {
      id: 1,
      name: "Movies",
      path: "/movies",
    },
    {
      id: 2,
      name: "Series",
      path: "/series",
    },
    {
      id: 3,
      name: "Documentaries",
      path: "/Documentries",
    },
  ];

  const getClassName = (isActive: boolean) => {
    return (
      (isActive ? "text-white" : "text-white/50") +
      " font-Poppins text-lg"
    );
  };

  return (
    <header className="bg-primary z-10 absolute w-full text-white">
      <div className="flex justify-between max-w-[1024px] mx-auto self-center py-4">
        <div className="space-x-8">
          {variables.map((link) => {
            return (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }: { isActive: boolean }) =>
                  getClassName(isActive)
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <SearchIcon className="size-5" />
          </div>
          <NotificationIcon className="size-5" />
          <div className="flex items-center gap-2">
            <ProfileIcon className="size-6" />
            <NavLink
              to={"/profile"}
              className="font-medium font-Poppins text-lg"
            >
              {name}
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
