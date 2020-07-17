import React, { useState, useEffect } from 'react';
import ItemList from './Components/ItemList'

//CSS
import './Styles/App.css'
import Header from './Components/Header';

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  //console.log(isLoaded)

  const handleChange = searchText => {
    setSearchText(searchText)
  }

  //useEffect won't run if searchText is empty or unchanged
  useEffect(() => {
    if (searchText) {
      //fetch url
      async function fetchItems() {
        const response = await fetch(
          `https://itunes.apple.com/search?term=${searchText}&media=music&entity=album&limit=200&country=ca`
        );
        const items = await response.json();
        console.log(items.results);
        setItems(items.results);
        setIsLoaded(true)
      }
      fetchItems();
    }
  }, [searchText])

  return (
    <div className="container">
      <Header handleChange={handleChange} isLoaded={isLoaded}/>
      {isLoaded &&
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
