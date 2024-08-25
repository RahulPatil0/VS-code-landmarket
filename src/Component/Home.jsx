import React, { useState } from 'react';
import Layout from './Layout/Layout';
// import LandBuyingGuide from './LandBuyingGuide';
import SearchBar from './Layout/SearchBar';

import './Home.css';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className='Home'>
        <SearchBar /> 
      </div>
      {/* <LandBuyingGuide />  */}
    </Layout>
  );
}

export default Home;