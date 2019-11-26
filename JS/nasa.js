var APIkey = "uWIu8uv5Spy9wyE79E7UI6QzuSi1Seu9sX0ZYwaU";
var nasaImg = document.getElementById("Planets");
var explanationNASA = document.getElementById("explanation");




/*fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))*/

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
      .then(function (response) {
        nasaImg.src = response.data.hdurl;
        explanationNASA.innerHTML =response.data.explanation;


        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    

/*
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
    .then(function (response) {
        image.src = response.url;
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });*/
    