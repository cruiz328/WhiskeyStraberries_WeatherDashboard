console.log('hey handsome');
const lat = //?????
console.log(lat);
const lon = //?????
console.log(log);
const APIKey = `050e404c2fb641bab9615053ab364bda`;
//  AJAX call to get current weather info
$.ajax({
    url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`,

  }).done(function(response) {
    // $( '#seasearch' ).addClass( "done" );
    console.log(response);
  });


  //  AJAX call to get geo coding api coordinates using zip codes
  //  for the current weather API
  const limit = 10
  const cityName = 'antioch'
  const stateCode = 'california'
  const countryCode = 'unitedStatesOfAmerica'
$.ajax({
  url: `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=${limit}&appid=${APIKey}`,
}).done(function(response) {
  console.log(response);

});


  //https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
  const statesArr = [];

  $('#search-state').on("click", function(e){
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
 