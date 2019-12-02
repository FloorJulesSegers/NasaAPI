var APIkey = "uWIu8uv5Spy9wyE79E7UI6QzuSi1Seu9sX0ZYwaU";
var nasaImg = document.getElementById("Planets");
var nasaVideo = document.getElementById("Planets2");
var explanationNASA = document.getElementById("explanation");
var dateNASA = document.getElementById("date");
var artNASA = document.getElementById("art");



axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
  .then(function (response) {
    if (response.data.media_type = "video") {
      nasaVideo.src = response.data.url;
      nasaImg.style.display = "none";
    } else {
      nasaImg.src = response.data.hdurl;
      nasaVideo.style.display = "none";

    }
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


    