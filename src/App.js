import React, { useState, useEffect } from 'react';
import ItemList from './Components/ItemList'
import Loading from './Components/Loading'
import NoResult from './Components/NoResult'
import PageButton from './Components/PageButton'
//CSS
import './Styles/App.css'
import Header from './Components/Header';


const App = () => {
  const [searchText, setSearchText] = useState('')
  const [page, setPage] = useState(1)
  const [items, setItems] = useState([])
  const [loadStatus, setLoadStatus] = useState('beforeLoad')

  //console.log(isLoaded)

  const handleChange = searchText => {
    setSearchText(searchText)

    //reset page to 1 when searchText change
    setPage(1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }

  //useEffect won't run if searchText is empty or unchanged
  useEffect(() => {
    if (searchText) {
      //set status to loading before fetch
      setLoadStatus('loading')
      //fetch url
      async function fetchItems() {
        const response = await fetch(
          `https://itunes.apple.com/search?term=${searchText}&entity=album&country=ca&limit=150&offset=${150 * (page - 1)}`,
          {mode: "cors"}
        );
        const items = await response.json();
        console.log(items.results);
        setItems(items.results);

        // set status to loaded after fetch
        setLoadStatus('loaded')
      }
      fetchItems();
    }
  }, [searchText, page])

  return (
    <div className={`container${loadStatus !== 'beforeLoad' ? ' container-loaded' : ''}`}>
      <Header handleChange={handleChange} loadStatus={loadStatus} />
      {loadStatus === 'loading' && <Loading />}
      {loadStatus === 'loaded' && !items.length &&
        <NoResult searchText={searchText} />
      }
      <div className="content-container">
        {loadStatus !== 'beforeLoad' &&
          <PageButton page={page} nextPage={nextPage} prevPage={prevPage} />
        }
        {loadStatus === 'loaded' &&
          <ItemList items={items} />
        }
      </div>
    </div>
  );
}

export default App;
