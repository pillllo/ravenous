import styles from './App.module.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import businesses from '../../dummyData';

function App() {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
