var x = document.getElementById("Home");
var y = document.getElementById("Projects");
var z = document.getElementById("Websites");
var a = document.getElementById("About");
var b = document.getElementById("Merch");



  function homeFunction() {
    //var x = document.getElementById("jumboLink");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      a.style.display = "none";
      b.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  document.getElementById("Projects").style.display = "none";
  function projectsFunction() {
    //var y = document.getElementById("photoLink");
    
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
    } else {
        y.style.display = "none";
    }
  }

  document.getElementById("Websites").style.display = "none";
  function websitesFunction() {
    //var x = document.getElementById("jumboLink");
    
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
    } else {
        z.style.display = "none";
    }
    
  }

  document.getElementById("About").style.display = "none";
  function servicesFunction() {
    //var x = document.getElementById("jumboLink");
    
    if (a.style.display === "none") {
        a.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        b.style.display = "none";
    } else {
        a.style.display = "none";
    }

    document.getElementById("Merch").style.display = "none";
  function contactFunction() {
    //var x = document.getElementById("jumboLink");
    
    if (b.style.display === "none") {
        b.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
    } else {
        b.style.display = "none";
    }
  }

