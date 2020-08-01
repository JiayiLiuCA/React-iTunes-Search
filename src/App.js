import React, { useState, useEffect } from 'react';
import ItemList from './Components/ItemList'
import Loading from './Components/Loading'
import NoResult from './Components/NoResult'
import PageButton from './Components/PageButton'
//CSS
import './Styles/App.css'
import Header from './Components/Header';

//Google Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-174170152-1');
ReactGA.pageview(window.location.pathname + window.location.search);


const App = () => {
  const [searchText, setSearchText] = useState('')
  const [page, setPage] = useState(1)
  const [items, setItems] = useState([])
  const [loadStatus, setLoadStatus] = useState('beforeLoad')
  const [countryCode, setCountryCode] = useState('CA')

  //console.log(isLoaded)

  const handleChange = searchText => {
    setSearchText(searchText);

    //reset page to 1 when searchText change
    setPage(1);
  }

  const nextPage = () => {
    setPage(page + 1);
  }

  const prevPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  }

  //Get current country code after mount
  useEffect(() => {
    async function fetchCountryCode() {
      const response = await fetch(
        `https://ip-api.com/json`
      )
      const data = await response.json();
      setCountryCode(data.countryCode);
    }
    //fetch here
    fetchCountryCode().catch((error) => {
      console.log("Error: ", error);
    });
  }, [])



  //Listen to searchText and page changes
  useEffect(() => {
    if (searchText) {
      async function fetchItems() {
        const response = await fetch(
          `https://itunes.apple.com/search?term=${searchText}&entity=album&country=${countryCode}&limit=120&offset=${120 * (page - 1)}`
        );
        const data = await response.json();
        setItems(data.results);
        // set status to loaded after fetch
        setLoadStatus('loaded');
      }
      //set status to loading before fetch
      setLoadStatus('loading');
      //fetch url
      fetchItems().catch((error) => {
        console.log("Error: ", error);
      });
    }
  }, [searchText,page,countryCode])




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
