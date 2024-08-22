import React from "react";
import Business from "../Business/Business";
import styles from "./BusinessList.module.css";

function BusinessList({ businesses }) {
  return (
    <div className={styles.BusinessList}>
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;
