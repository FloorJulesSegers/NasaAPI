var APIkey = "uWIu8uv5Spy9wyE79E7UI6QzuSi1Seu9sX0ZYwaU";
var nasaImg = document.getElementById("Planets");
var explanationNASA = document.getElementById("explanation");
var dateNASA = document.getElementById("date");
var artNASA = document.getElementById("art");



    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
      .then(function (response) {
        nasaImg.src = response.data.hdurl;
        explanationNASA.innerHTML = response.data.explanation;
        dateNASA.innerHTML = response.data.date;
        artNASA.innerHTML = response.data.title + " <br> by <br>" + response.data.copyright;



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
    


    