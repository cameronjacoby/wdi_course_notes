// Getting Close

// You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in a park, but it has gotten so popular that many people want to join in. 
// One of your friends created an API for people to add items hidden in the park, but now you want to build an App to help people decide what to find in the park.

// You are given the following set of data as a result back from an API and you want to sort those results in terms of proximity to the user of your site.

var myResults = [   {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}}, 
                    {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
                    {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
                    {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
                    {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
                    {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}]

// Write a loop that takes some results and a current location, i.e. lat and long and returns the results in order of proximity to the currentLocation. Note: you should choose this current location.


var currLoc = myResults[0].location;

for (var i = 0, result, loc; i < myResults.length; i += 1) {
  result = myResults[i];
  loc = result.location;
  result.distance = Math.abs(currLoc.lat - loc.lat) + Math.abs(currLoc.long - loc.long)
}

console.log(myResults);

for (var a = 0; a < myResults.length; a += 1) {
  for (b = 0; b < myResults.length; b += 1) {
    if (myResults[a].distance < myResults[b].distance) {
      var container = myResults[a].distance;
      myResults[a].distance = myResults[b].distance;
      myResults[b].distance = container;
    }
  }
}

console.log(myResults);