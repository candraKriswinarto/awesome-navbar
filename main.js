const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.nav-links li a');

window.onscroll = () => {
  if(document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = "#fff";
    navbar.style.padding = "1rem 2rem";
    navbar.style.boxShadow = "0 1px 2px rgba(0,0,0,.5)";
    links.forEach(link => {
      link.style.color = "#111";
    });

  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.padding = "1.5rem 2rem";
    navbar.style.boxShadow = "none";
    links.forEach(link => {
      link.style.color = "#fff";
    });
  }
}
