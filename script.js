window.addEventListener("scroll", function () {
    const notif = document.getElementById("notif");
    const navbar = document.getElementById("head");
    const hero = document.getElementById("hero");
  
    if (notif.getBoundingClientRect().bottom <= 0) {
      navbar.style.position = "fixed";
      navbar.style.top = "0";
      navbar.style.width = "100%";
      navbar.style.zIndex = "1000"; // Ensure it's above other content
      hero.style.marginTop = "60px";
    } else {
      navbar.style.position = "relative";
      hero.style.marginTop = "0px";
    }
  });
  