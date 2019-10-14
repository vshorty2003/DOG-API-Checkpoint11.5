"use strict";

function watchUserInput() {
  $("#dog-num-form").submit(e => {
    e.preventDefault();
    let userNumInput = $("#num-dog").val();
    //Pass the number value to getDogImage
    getDogImage(userNumInput);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchUserInput();
});

//Pass numInput, which represents an integer as an argument
function getDogImage(numInput) {
  if (numInput < 3) {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert("Something went wrong. Try again later."));
  } else if (numInput > 50) {
    return alert("Please choose a number equal or less than 50");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert("Something went wrong. Try again later."));
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  $(".results").html("");
  responseJson.message.forEach(renderedImg => {
    $(".results").append(`<img src="${renderedImg}" class="results">`);
  });
  //display the results section
  $(".results").removeClass("hidden");
}