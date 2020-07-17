import React, { useState, useEffect } from 'react';

//CSS
import './Styles/App.css'
import Header from './Components/Header';

const App =  () => {
  const [searchText, setSearchText] = useState('')
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("https://itunes.apple.com/search?term=beethoven&limit=200&country=ca")
      const items = await response.json()
      console.log(items);
    }
    fetchItems();
  }, [])

  return (
    <div className="container">
      <Header />
      
    </div>
  );
}

export default App;
