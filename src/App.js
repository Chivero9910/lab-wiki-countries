import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';

import axios from 'axios';

function App() {
  const [countriesList, setCountriesList] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        console.log(response.data);
        setCountriesList(response.data);
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isFetching === true) {
    return <h3>... looking for</h3>;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
          <CountriesList countriesList={countriesList} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countriesList={countriesList} />}
            />
          </Routes>
        </div>
      </div>
  );
}

export default App;
