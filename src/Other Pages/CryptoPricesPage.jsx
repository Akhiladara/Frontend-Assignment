import React, { useState, useEffect } from 'react';
import './HomePage.css';


const CryptocurrencyCards = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBitcoinPrices(data.bpi);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cryptocurrency-container">
      <h1 className='crypto-heading'>Cryptocurrency Prices</h1>
      <div className="cryptocurrency-cards">
      {loading ? (
        <p>Loading...</p>
      ) : (
        Object.entries(bitcoinPrices).map(([currency, { rate }]) => (
          <div className="card" key={currency}>
            <div className='image-card'>
              <img src="https://asiasociety.org/sites/default/files/styles/1200w/public/2018-01/bitcoin-106808_960_720.jpg"
              className='bitcoin'
              alt="Cryptocurrency" />
                <h2 className='custom-currency'>{currency}</h2>
            </div>
            <p className='custom-price'>Price: {rate}</p>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default CryptocurrencyCards;
