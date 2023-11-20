import React, { useState } from 'react';
import axios from 'axios'; //Axios is used for the request part of this, format the json and stuff.

function AirbnbSearchComponent() {
  
  // Using the useState so when the form is submitted we can just set the variable to this.
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [results, setResults] = useState([]); 

  // Calling the API here, and then once all the values are there we send the request using axios
  const handleSearch = async (e) => {
    e.preventDefault();

    // Validate check-in date
    if (new Date(checkIn) < new Date()) {
      alert("Check-in date must be in the future.");
      return;
    }

    // Example taken from the example axios API call from Rapid API, made new account for this, and we have to use a Rapid API Key in order for this to be successful.
    const options = {
      method: 'GET',
      url: 'https://airbnb13.p.rapidapi.com/search-location',
      params: {
        location,
        checkin: checkIn,
        checkout: checkOut,
        adults: '1',
        children: '0',
        infants: '0',
        pets: '0',
        page: '1',
        currency: 'USD'
      },
      headers: {
        'X-RapidAPI-Key': '55a3f1825cmshfc2119b75fe3019p16a37ejsn802c53abf101', 
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setResults(response.data.results); 
    } catch (error) {
      console.error(error);
    }
  };


  // Form takes in the location and the check in and checkout date. 
  return (
    <div>
      <h1>Airbnb Search</h1>
      <p>Please enter the location in which you would like to stay at as well as the start day and end date of your stay.</p>
      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={location}
          //Using an event handler here to update the values such as location, and the dates below so we can put it in the API request. 
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <br></br>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          placeholder="Check-in Date"
        />
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          placeholder="Check-out Date"
        />
        <button type="submit">Search</button>
      </form>
      
      <div>
        {/* The map function hear allows us to take the output from the result and output it here. We create a new function called ResultItem to handle this and format it because it gets pretty messy. */}
        {results.map((result, index) => (
          <ResultItem key={index} result={result} />
        ))}
      </div>
    </div>
  );
}

// Here we iterate over those items and we see the City, Address, and Price of each of those items in what I was able to pull from the json.
// Example resposne from rapidapi for reference:

//{
//   "type": "object",
//   "properties": {
//     "error": {
//       "type": "boolean"
//     },
//     "headers": {
//       "type": "object",
//       "properties": {
//         "response_time": {
//           "type": "integer"
//         },
//         "response_timestamp": {
//           "type": "string"
//         },
//         "response_id": {
//           "type": "integer"
//         }
//       }
//     },
//     "results": {
//       "type": "array",
//       "items": {
//         "type": "object"
//       }
//     }
//   }
// }

function ResultItem({ result }) {
  return (
    <div>
      <h3>{result.name}</h3>
      <p>City: {result.city}</p>
      <p>Address: {result.address}</p>
      <p>Price: ${result.price.rate} {result.price.currency}</p>
      <img src={result.images[0]} alt={result.name} style={{ width: '100px', height: '100px' }} />
      {/* Add more images or other details as needed */}
    </div>
  );
}

export default AirbnbSearchComponent;