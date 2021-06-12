import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import TvList from '../components/TV/TvList';
// import axios from 'axios';
// import { API_URL, API_KEY } from '../config';

function Home() {
  useEffect(() => {
    document.getElementsByClassName('navbar')[0].style.visibility = 'visible';
  }, []);

  const [state, setState] = useState([]);

  return (
    <>
      <Banner />

      <TvList state={state} setState={setState} />
    </>
  );
}

export default Home;
