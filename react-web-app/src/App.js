import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav';
import Blogs from './components/blogs';
import TravelExpenses from './components/travelExpenses';
import PageNotFound from './components/pageNotFound';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <div className='container-fluid'>
          <div className='row mt-3'>
            <div className='col-lg-12'>
              <Routes>
                <Route path='/' element={<Blogs />} />
                <Route path='/cal-travel-exp' element={<TravelExpenses />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
