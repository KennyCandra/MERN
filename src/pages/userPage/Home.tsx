import { useDispatch } from "react-redux"
import { logout } from "../../redux/UserSlice/UserSlice"
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import MovieCard from "../../components/MovieCard/MovieCard";


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = async () => {
    fetch('http://localhost:8001/user/logout', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleLogout = () => {
    logOut();
    dispatch(logout());
    navigate('/login');
  }



  return (
    <>
      <Header />
      <MovieCard />
    </>

  )
}

export default Home