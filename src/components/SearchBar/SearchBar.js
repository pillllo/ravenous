import React from 'react';
import styles from './SearchBar.module.css'

function SearchBar() {
    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <p>Best Match</p>
                <p>Highest Rated</p>
                <p>Most Reviewed</p>
            </div>    
            <div className={styles.SearchBarFields}>
                <input type='text' name='keywords' placeholder='Search Businesses'></input>
                <input type='text' name='location' placeholder='Where?'></input>
            </div>
            <div className={styles.SearchBarSubmit}>
                <a>Let's Go</a>    
            </div>
        </div>
    )
};

export default SearchBar;