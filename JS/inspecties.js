// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("list-group-item list-group-item-action");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  var information = document.getElementById("inspection-name");
  var name = current[0].textContent;
  information.innerHTML = name;
  var x = document.getElementById("inspection-info");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  });
}