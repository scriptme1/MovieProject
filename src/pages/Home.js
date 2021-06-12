import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import MovieList from '../components/MovieList/MovieList';


function Home() {
  useEffect(() => {
    document.getElementsByClassName('navbar')[0].style.visibility = 'visible';
  }, []);

  const [state, setState] = useState([]);

  return (
    <>
      <Banner />
      <MovieList state={state} setState={setState} />
    </>
  );
}

export default Home;
