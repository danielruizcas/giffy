import './App.css';
import React from 'react';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { Link, Route } from "wouter";
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=vJWOHg9zPBYslUBt5HdRwR1X2f6C7ZXG&q=panda&limit=25&offset=0&rating=pg&lang=en'

export default function App() {
  return (
    <StaticContext.Provider value={{
      name: 'Daniel Ruiz',
      elMejorProgramador: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <img className='App-logo' alt='Giffy logo' src="/gafas-divertidas.png" />
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

