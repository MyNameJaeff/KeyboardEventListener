const characters = [...Array(95).keys()].map((i) =>
  String.fromCharCode(i + 32)
);

characters.forEach((element) => {
  let keyElement;
  if (element == characters[0]) {
    keyElement = `<p id="charCode${element.charCodeAt()}">Spacebar</p>`;
  } else {
    keyElement = `<p id="charCode${element.charCodeAt()}">${element}</p>`;
  }
  $("#keyboardDiv").append(keyElement);
});

window.addEventListener("keydown", (key) => {
  if (
    (key.key.charCodeAt() == 65 && key.key != "A") ||
    (key.key.charCodeAt() == 83 && key.key != "S") ||
    (key.key.charCodeAt() == 67 && key.key != "C") ||
    (key.key.charCodeAt() == 77 && key.key != "M") 
  ) {
    console.log("NOT RIGHT!!");
  } else {
    //$("#charCode" + key.keyCode).css("background-color", "tomato");
    $("#charCode" + key.key.charCodeAt()).css("background-color", "tomato");
  }
});

window.addEventListener("keyup", (key) => {
    if (
        (key.key.charCodeAt() == 65 && key.key != "A") ||
        (key.key.charCodeAt() == 83 && key.key != "S") ||
        (key.key.charCodeAt() == 67 && key.key != "C") ||
        (key.key.charCodeAt() == 77 && key.key != "M") 
      ) {
        console.log("INVALID KEY!");
        console.clear();
      } else {
        //$("#charCode" + key.keyCode).css("background-color", "tomato");
        $("#charCode" + key.key.charCodeAt()).css("background-color", "lightgrey");
      }
});
