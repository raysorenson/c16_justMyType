$(function () {
  //step 1, hide uppercase keyboard

  $("#keyboard-upper-container").css("display", "none");

  //step 2, enable keyboard toggling

  //displays uppercase
  $(document).keydown(function (e) {
    if (e.shiftKey) {
      $("#keyboard-upper-container").show();
      $("#keyboard-lower-container").hide();
    }
  });

  //displays lowercase
  $(document).keyup(function (e) {
    if (e.which == 16) {
      $("#keyboard-upper-container").hide();
      $("#keyboard-lower-container").show();
    }
  });

  //step 3 highlight keys pressed

  //highlights key in yellow
  $(document).keydown(function (e) {
    let asciiCode = e.key.charCodeAt(0);
    $("#" + asciiCode).css("background-color", "yellow");
  });

  //returns key back to whiteSmoke
  $(document).keyup(function (e) {
    let asciiCode = e.key.charCodeAt(0);
    $("#" + asciiCode).css("background-color", "whiteSmoke");
  });

  //step 4 display sentences to be typed in browser

  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  let sentenceCounter = 0;
  let letterCounter = 0;
  let currentSentence = sentences[sentenceCounter];
  let letterUp = currentSentence.split("", currentSentence.length);
  let currentLetter = currentSentence.charAt(0);

  function displaySentence() {
    do {
      $("#sentence").append(
        `<span id='letterUp${letterCounter}'>${letterUp[letterCounter]}</span>`
      );
      letterCounter++;
    } while (letterCounter < currentSentence.length);
    letterCounter = 1;
    sentenceCounter++;
    $(`#letterUp${[0]}`).css("background-color", "yellow");
    $("#target-letter").append(`<span id="target">${letterUp[0]}</span>`);
  }

  displaySentence();

  function nextLetter() {
    $("#target-letter").empty();
    if (letterUp[letterCounter] === " ") {
      $("#target-letter").append(`<span id = "target">[ SPACE ]</span>`);
    } else if (letterCounter < currentSentence.length) {
      $("#target-letter").append(
        `<span id = "target">${letterUp[letterCounter]}</span>`
      );
    }
  }

  function typeLetters() {
    nextLetter();
    $(`#letterUp${letterCounter}`).css("background-color", "yellow");
    if (letterCounter > 0) {
      $(`#letterUp${letterCounter}`).prev().css("background-color", "white");
    }

    letterCounter++;

    if (currentSentence.length === letterCounter - 1) {
      $("#currentSentence").empty();
      displaySentence();
    }
  }

  

  $(document).keypress(function () {
    typeLetters();
    
  });
});
