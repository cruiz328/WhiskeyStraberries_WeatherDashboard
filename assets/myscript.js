console.log('hey handsome');
const lat = 33.44
const lon = -94.04

const APIKey = `050e404c2fb641bab9615053ab364bda`;

$.ajax({
    url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`,

  }).done(function(response) {
    // $( '#seasearch' ).addClass( "done" );
    console.log(response);
  });

  //https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}