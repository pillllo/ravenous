import React, { useState } from "react";
import styles from "./App.module.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { getBusinesses } from "../../utils/utils";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = async (search, location, sorting) => {
    const businesses = await getBusinesses(search, location, sorting);
    setBusinesses(businesses);
  };

  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar handleSearch={handleSearch} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
