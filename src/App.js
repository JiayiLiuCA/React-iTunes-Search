import React, { useState, useEffect } from 'react';
import ItemList from './Components/ItemList'

//CSS
import './Styles/App.css'
import Header from './Components/Header';

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [items, setItems] = useState([])
  const [loadStatus, setLoadStatus] = useState('beforeLoad')

  //console.log(isLoaded)

  const handleChange = searchText => {
    setSearchText(searchText)
  }

  //useEffect won't run if searchText is empty or unchanged
  useEffect(() => {
    if (searchText) {
      setLoadStatus('loading')
      //fetch url
      async function fetchItems() {
        const response = await fetch(
          `https://itunes.apple.com/search?term=${searchText}&entity=album&country=ca&limit=200&offset=0`
        );
        const items = await response.json();
        console.log(items.results);
        setItems(items.results);
        setLoadStatus('loaded')
      }
      fetchItems();
    }
  }, [searchText])

  return (
    <div className={`container${loadStatus !== 'beforeLoad'? ' container-loaded' : ''}`}>
      <Header handleChange={handleChange} loadStatus={loadStatus}/>
      {loadStatus === 'loading' &&
        <div> loading </div>
      }
      {loadStatus === 'loaded' &&
        !items.length &&
        <strong>
          {`No results for '${searchText}' :(`}
        </strong>
      }
      <ItemList items={items} />
    </div>
  );
}

export default App;
