function underline() {
  document.getElementById("textarea1").style.textDecoration = "underline";
}
function removecss() {
  document.getElementById("textarea1").style.fontWeight = "normal";
  document.getElementById("textarea1").style.textDecoration = "";
  document.getElementById("textarea1").style.textAlign = "left";
  document.getElementById("textarea1").style.fontStyle = "normal";
  document.getElementById("textarea1").style.textTransform = "capitalize";
}
function bold() {
  //function to make the text bold using DOM method
  document.getElementById("textarea1").style.fontWeight = "bold";
}

function italic() {
  //function to make the text italic using DOM method
  document.getElementById("textarea1").style.fontStyle = "italic";
}

function left() {
  //function to make the text alignment left using DOM method
  document.getElementById("textarea1").style.textAlign = "left";
}

function center() {
  //function to make the text alignment center using DOM method
  document.getElementById("textarea1").style.textAlign = "center";
}

function right() {
  //function to make the text alignment right using DOM method
  document.getElementById("textarea1").style.textAlign = "right";
}

function uppercase() {
  //function to make the text in Uppercase using DOM method
  document.getElementById("textarea1").style.textTransform = "uppercase";
}

function lowercase() {
  //function to make the text in Lowercase using DOM method
  document.getElementById("textarea1").style.textTransform = "lowercase";
}

function capitalize() {
  //function to make the text capitalize using DOM method
  document.getElementById("textarea1").style.textTransform = "capitalize";
}

function cleartext() {
  //function to make the text back to normal by removing all the methods applied
  //using DOM method
  document.getElementById("textarea1").style.fontWeight = "normal";
  document.getElementById("textarea1").style.textAlign = "left";
  document.getElementById("textarea1").style.fontStyle = "normal";
  document.getElementById("textarea1").style.textTransform = "capitalize";
  document.getElementById("textarea1").style.textDecoration = "";
  document.getElementById("textarea1").value = "";
}
