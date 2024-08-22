import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ handleSearch }) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [sorting, setSorting] = useState("best_match");

  const handleSortOptionClick = (sortOption) => setSorting(sortOption);
  const handleSearchInput = (event) => setSearch(event.target.value);
  const handleLocationInput = (event) => setLocation(event.target.value);
  const handleSearchSubmission = (event) => {
    event.preventDefault();
    handleSearch(search, location, sorting);
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>
          <li
            key={1}
            onClick={() => handleSortOptionClick("best_match")}
            className={sorting === "best_match" ? styles.active : ""}
          >
            Best Match
          </li>
          <li
            key={2}
            onClick={() => handleSortOptionClick("highest_rated")}
            className={sorting === "highest_rated" ? styles.active : ""}
          >
            Highest Rated
          </li>
          <li
            key={3}
            onClick={() => handleSortOptionClick("most_reviewed")}
            className={sorting === "most_reviewed" ? styles.active : ""}
          >
            Most Reviewed
          </li>
        </ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input
          type="text"
          name="search"
          placeholder="Search Businesses"
          value={search}
          onChange={handleSearchInput}
        ></input>
        <input
          type="text"
          name="location"
          placeholder="Where?"
          value={location}
          onChange={handleLocationInput}
        ></input>
      </div>
      <div className={styles.SearchBarSubmit}>
        <a onClick={handleSearchSubmission}>Let's Go</a>
      </div>
    </div>
  );
}

export default SearchBar;
