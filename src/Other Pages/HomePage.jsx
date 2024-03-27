import React from 'react';
import './HomePage.css';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import LineChart from './LineChart'; // Import the LineChart component
import CryptoPricesPage from './CryptoPricesPage'; // Import the CryptoPricesPage component

const HomePage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='header'>
          <div className='header-content'>
            <h1 className='title'>Hello, <span className='custom-word'>User</span> <WavingHandIcon /></h1>
            <h2 className='sub-title'>Welcome to <span className='custom-word'>Spot trading !</span></h2>
          </div>
          <div>
            <button className='button'>Start Trading</button>
          </div>
        </div>
      </div>
      <div className='chart-container'>
        <LineChart /> {/* Render the LineChart component here */}
      </div>
      <div>
        <CryptoPricesPage /> {/* Render the CryptoPricesPage component here */}
      </div>
    </div>
  )
}

export default HomePage;
