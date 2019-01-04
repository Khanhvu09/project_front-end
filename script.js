// $('#service_link').click(function(){
//   $( "#service_link" ).load( "index.html #service" );

// })
// const baseUrl = `http://cm.ridiculous-inc.com/?`

window.onload=function(){
  document.getElementById("flight_button").click();
};

$('#flight_button').click(function(){
  console.log("some clicked on change html")
  $('#flight_button').css({
    "background-color": "#087cc4"
  });
  $('#car_button,#hotel_button,#things_button').css({
    "background-color": "lightskyblue"
  });
  $('.buttons_bundle').html(`<button name="test" value="fly" id="flight_bundle"><i class="fas fa-plane fa-1x"></i><br>Flight<br></button><input name="searchType" value="Flight" type="checkbox">
  <button id="car_bundle" type="checkbox"><i class="fas fa-car fa-1x"></i><br>Car Rental<br></button><input name="searchType" value="CarRental" type="checkbox">
  <button id="hotel_budle" type="checkbox"><i class="fas fa-hotel fa-1x"></i><br>Hotel<br></button><input name="searchType" value="Hotel" type="checkbox">
  <button id="things_bundle" type="checkbox"><i class="fas fa-funnel-dollar fa-1x"></i><br>Things to do<br></button><input name="searchType" value="ThingsToDo" type="checkbox">
  `)
  $('#label').html(`Flying from<input type="text" placeholder="Location" name="origin"></input> Flying to<input type="text" placeholder="Location" name="destination"></input><br>
  Departing<input type="date" name="departureDate"></input> Returning<input type="date" name="returnDate"></input> `);
})


$('#car_button').click(function(){
  console.log("some clicked on change html")
  $('#car_button').css({
    "background-color": "#087cc4"
  });
  $('#flight_button,#hotel_button,#things_button').css({
    "background-color": "lightskyblue"
  });
  $('.buttons_bundle').html(`<button id="flight_bundle"><i class="fas fa-plane fa-1x"></i><br>Flight<br><input type="checkbox"></button>
  <button id="car_bundle" type="checkbox"><i class="fas fa-car fa-1x"></i><br>Car Rental<br><input type="checkbox"></button>
  <button id="hotel_budle" type="checkbox"><i class="fas fa-hotel fa-1x"></i><br>Hotel<br><input type="checkbox"></button>
  <button id="things_bundle" type="checkbox"><i class="fas fa-funnel-dollar fa-1x"></i><br>Things to do<br><input type="checkbox"></button>
  `)
  $('#label').html(`Picking up<input type="text" placeholder="Location"></input> Dropping off<input type="text" placeholder="Location"></input><br>
  Pick up date<input type="date"></input> Drop of date<input type="date"></input>`);
})


$('#hotel_button').click(function(){
  console.log("some clicked on change html")
  $('#hotel_button').css({
    "background-color": "#087cc4"
  });
  $('#car_button,#flight_button,#things_button').css({
    "background-color": "lightskyblue"
  });
  $('.buttons_bundle').html(`<button id="flight_bundle"><i class="fas fa-plane fa-1x"></i><br>Flight<br><input type="checkbox"></button>
  <button id="car_bundle" type="checkbox"><i class="fas fa-car fa-1x"></i><br>Car Rental<br><input type="checkbox"></button>
  <button id="hotel_budle" type="checkbox"><i class="fas fa-hotel fa-1x"></i><br>Hotel<br><input type="checkbox"></button>
  <button id="things_bundle" type="checkbox"><i class="fas fa-funnel-dollar fa-1x"></i><br>Things to do<br><input type="checkbox"></button>
  `)
  $('#label').html(`Destination<input type="text" placeholder="Location"></input><br>
  Check in<input type="date"></input> Check out<input type="date"></input><br> Nights<input type="number"></input> Occupancy<input type="number" maxlength="4"></input>`);
})


$('#things_button').click(function(){
  console.log("some clicked on change html")
  
  $('#things_button').css({
    "background-color": "#087cc4"
  });
  $('#car_button,#hotel_button,#flight_button').css({
    "background-color": "lightskyblue"
  });
  $('.buttons_bundle').html(`<button id="flight_bundle"><i class="fas fa-plane fa-1x"></i><br>Flight<br><input type="checkbox"></button>
  <button id="car_bundle" type="checkbox"><i class="fas fa-car fa-1x"></i><br>Car Rental<br><input type="checkbox"></button>
  <button id="hotel_budle" type="checkbox"><i class="fas fa-hotel fa-1x"></i><br>Hotel<br><input type="checkbox"></button>
  <button id="things_bundle" type="checkbox"><i class="fas fa-funnel-dollar fa-1x"></i><br>Things to do<br><input type="checkbox"></button>
  `)
  $('#label').html(`Destination<input type="text" placeholder="Location"></input><br>
  Check in<input type="date"></input> Check out<input type="date"></input>`)

});