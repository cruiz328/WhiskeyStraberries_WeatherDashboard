console.log('hey handsome');
let lat;
// console.log(lat);
let lon;
// console.log(log);
const APIKey = `050e404c2fb641bab9615053ab364bda`;
//  AJAX call to get current weather info



//  AJAX call to get geo coding api coordinates using zip codes
//  for the current weather API


function getWeather(state) {

  $.ajax({
    url: `http://api.openweathermap.org/geo/1.0/direct?q=${state}&limit=10&appid=${APIKey}`,
  }).done(function (response) {
    lat = response[0].lat;
    lon = response[0].lon;
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`,

    }).done(function (response) {
      // $( '#seasearch' ).addClass( "done" );
      console.log(response);
      let daily = response.daily;
      let current = response.current;
      console.log(daily, current)
      // dynamically creating an html element displaying
      // the "current" weather with its specific data set
      // Current 'Cloud' Data Set
      const currentDisplay_Clouds = $('<tr>');
      const currentCloud = $('<th>');
      currentCloud.html(current.clouds);
      currentDisplay_Clouds.append(currentCloud);
      // Adding the 'currentWeatherDisplay' onto the html page
      // to its corresponding column
      $('#currentWeatherDisplay').append(currentDisplay_Clouds);
      // Current 'Temperature' Data Set
      const currentDisplay_Temp = $('<tr>');
      const currentTemp = $('<th>');
      currentTemp.html(current.temp);
      currentDisplay_Temp.append(currentTemp);
      $('#currentWeatherDisplay').append(currentDisplay_Temp);
      // Current 'Humidity' Data Set
      const currentDisplay_Humidity = $('<tr>');
      const currentHumidity = $('<th>');
      currentHumidity.html(current.humidity);
      currentDisplay_Humidity.append(currentHumidity);
      $('#currentWeatherDisplay').append(currentDisplay_Humidity);
      // Current 'Weather Conditions' Data Set
      const currentDisplay_Weather = $('<tr>');
      const currentWeather = $('<th>');
      currentWeather.html(current.Weather);
      currentDisplay_Weather.append(currentWeather);
      $('#currentWeatherDisplay').append(currentDisplay_Weather);
      // Just a test
      const currentDisplay_Description = $('<tr>');
      const currentDescription = $('<th>');
      currentDescription.html(current.Description);
      currentDisplay_Description.append(currentDescription);
      $('#currentWeatherDisplay').append(currentDisplay_Description);
      console.log('weather data set test')
      // Current 'Wind Speed' Data Set
      const currentDisplay_Wind_speed = $('<tr>');
      const currentWind_speed = $('<th>');
      currentWind_speed.html(current.Wind_speed);
      currentDisplay_Wind_speed.append(currentWind_speed);
      $('#currentWeatherDisplay').append(currentDisplay_Wind_speed);
      // Current 'UV Index' Data Set
      const currentDisplay_Uvi = $('<tr>');
      const currentUvi = $('<th>');
      currentUvi.html(current.uvi);
      currentDisplay_Uvi.append(currentUvi);
      $('#currentWeatherDisplay').append(currentDisplay_Uvi);
    });



  });
}



//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
const statesArr = [];

$('#search-state').on("click", function (e) {
  const state = $('#form1').val();
  statesArr.push(state);
  console.log(statesArr);
  AddState();

})



function AddState() {
  $('#display-states').empty()
  for (var i = 0; i < statesArr.length; i++) {
    const btnState = $('<button>');
    btnState.html(statesArr[i])
    btnState.addClass('showWeather');

    $('#display-states').append(btnState);
  }
}

$(document).on('click', '.showWeather', function (e) {
  e.preventDefault();
  console.log($(this).html());
  getWeather($(this).html());
})