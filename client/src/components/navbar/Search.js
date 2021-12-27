import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../actions";
import './navbar.css'
export default function SearchBar() {
  const [dogState, setDogsState] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    
    if (dogState.length === 0) {
      return alert("Please input a name to start the search");
    } else {
      dispatch(getDogsByName(dogState));
      setDogsState("");
      // alert(dispatch.message);
    }
  }

  return (
    <div className="search" >
      <input
        type="text"
        placeholder="Search a dog..."
        value={dogState}
        onChange={(e) => setDogsState(e.target.value)}
      />
      <button className="busquedaBtn"  type="submit" onClick={handleClick}>
        <span  >search</span>
      </button>
    </div>
  );
}
