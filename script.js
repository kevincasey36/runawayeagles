function getStockData(symbol) {
  // Replace YOUR_API_KEY with your actual API key
  const API_KEY = 'pk_351cdc0329064aaeb6e6d510e98f0f60';

  // Replace https://example.com/api with the URL of your API
  const API_URL = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${API_KEY}`;

  // Make the API call
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      // The data variable contains the response from the API, which you can parse and use as needed
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}

// Call the getStockData function with a stock symbol as an argument
getStockData('AAPL');
