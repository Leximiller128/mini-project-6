//fetch data from library of cong
var apiKey = "https://www.loc.gov/search/?fo=json";

fetch(`https://www.loc.gov/search/?fo=json${apiKey}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
//search data in library

//filter results

//results are displayed

//additional searches from the results page
