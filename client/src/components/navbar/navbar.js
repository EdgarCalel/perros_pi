import { Link } from 'react-router-dom';
import './navbar.css';
import SearchBar from "./Search";

export default function Navbar () {
  return (

      <>
          <div className="navContenido">
          <div className='iconoPerro'>
          <img src="https://cdn-icons-png.flaticon.com/512/3636/3636172.png" alt="" width={47} />
          </div>
          <div className="searchDiv">
<SearchBar />
</div>
          </div>

        
      </>

  );
};

