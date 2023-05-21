const existsElements = document.getElementsByClassName("exists");
// All "ancient" wonders that still exist
console.log(
  document.getElementById("ancient").getElementsByClassName("exists").length
); // 1
console.log(existsElements[0].innerHTML);
