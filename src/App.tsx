import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/userPage/Home";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import NotAuthenticated from "./pages/error-page/404";
import store from "./redux/store/rootStore";
import { Provider } from "react-redux";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
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
