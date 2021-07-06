import React from 'react';
// import axios from 'axios';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { axiosBurgers } from './store/actions/burgers';

// import { Header, Footer } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <div className="content">
        <Home />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
