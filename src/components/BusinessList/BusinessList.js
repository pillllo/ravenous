import React from "react";
import Business from "../Business/Business";
import styles from './BusinessList.module.css'

const businesses = [1, 2, 3, 4];

function BusinessList() {
    return (
        <div className={styles.BusinessList}>
            {businesses.map(business => <Business key={businesses.indexOf(business)}/>)}
        </div>
    )
};

export default BusinessList;