import axios from 'axios';

const getLocation = () => {
  if (navigator.geolocation) {
    console.log(navigator.geolocation.getCurrentPosition(showPosition, showError));
    axios.get('https://geolocation-db.com/jsonp/')
      .then(response => { 
        const toArr = response.data.split('"');
        window.localStorage.setItem('user_city', toArr[11]);
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    console.log('Geolocation is not enabled');
  };
};

const showPosition = (position) => {
  console.log("Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude);
};

const showError = (error) => {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.")
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.")
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.")
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.")
      break;
  }
};

export default getLocation;