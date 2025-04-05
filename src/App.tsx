import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import NotAuthenticated from "./pages/error-page/404";
import Layout from "./components/layout/Layout";
import Favourite from "./pages/Favourite/Favourite";
import Trending from "./pages/Trending/Trending";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import List from "./pages/Lists/List";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import SingleMoviePage from "./pages/SingleMoviePage/SingleMoviePage";
import SoloList from "./pages/SoloList/SoloList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/lists" element={<List />} />
            <Route path="/list/:listId" element={<SoloList />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/movie/:id" element={<SingleMoviePage />} />
            <Route element={<MoviesPage />} path="/movies" />

          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotAuthenticated />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
