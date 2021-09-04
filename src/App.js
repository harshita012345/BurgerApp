import React from 'react';
import Layout from './component/Layout/Layout';
import BurgerBuilder from './component/BurgerBuilder/BurgerBuilder';

import './App.css';

function App() {
  return (
    <div className="container-fluid">
    <div className="App">
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
    </div>
  );
}

export default App;
