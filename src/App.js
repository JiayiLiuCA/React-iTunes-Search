import React, { useState, useEffect } from 'react';
import ItemList from './Components/ItemList'

//CSS
import './Styles/App.css'
import Header from './Components/Header';

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [items, setItems] = useState([])
  //const [isLoading, setIsLoading] = useState(true)

  const handleChange = searchText => {
    //console.log(searchText);
    setSearchText(searchText)
  }
  useEffect(() => {
    if (searchText) {
      //fetch url
      async function fetchItems() {
        const response = await fetch(
          `https://itunes.apple.com/search?term=${searchText}&genres=classical&entity=album&limit=200&country=ca`
        );
        const items = await response.json();
        console.log(items.results);
        setItems(items.results);
        //setIsLoading(false)
      }
      fetchItems();
    }
  }, [searchText])

  return (
    <div className="container">
      
      <Header handleChange={handleChange} />
      <ItemList items={items}/>
    </div>
  );
}

export default App;
