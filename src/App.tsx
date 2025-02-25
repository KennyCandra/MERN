import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import NotAuthenticated from "./pages/error-page/404";
import store from "./redux/store/rootStore";
import { Provider } from "react-redux";
import Layout from "./components/layout/Layout";
import Favourite from "./pages/Favourite/Favourite";
import Trending from "./pages/Trending/Trending";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path='/favourite' element={<Favourite />} />
              <Route path='/trending' element={<Trending />} /> //do this element
              <Route path="/lists" element={<Favourite />} /> // do this element
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotAuthenticated />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
