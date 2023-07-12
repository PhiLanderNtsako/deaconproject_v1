/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("openNav").style.display = "none";
    document.getElementById("closeNav").style.display = "block";
    document.getElementById("navMenu").style.display = "flex";
  }

  function closeNav() {
    document.getElementById("openNav").style.display = "block";
    document.getElementById("closeNav").style.display = "none";
    document.getElementById("navMenu").style.display = "none";
  }