import React from 'react';
import './index.css';

const api = {
  key: '80f4ed9a48a81558d33b4d15e5af42ea',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March","April","May", "June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullyear();

    return `${day} ${date} ${month} ${year}`

  }

  return (
    <div className="app">
      <main>

    <div className="search-box">
      <input 
        type="text"
        className="search-bar"
        placeholder="Search..."
      />
    </div>
    <div className="location-box">
     <div className="location"> Sydney City, Australia</div>
  <div className="date"> {dateBuilder(new Date())} </div> 
    </div>
    <div className="weather-box"></div>
    <div className="temp"> 15</div>
    <div className="weather"> Sunny</div>



      
      </main>
    </div>
  );
}

export default App;
