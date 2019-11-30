const navbar = document.getElementById('navbar');
const mobileNavbar = document.querySelector('.mobile-nav');
const links = document.querySelectorAll('.nav-links li a');
const burgerIcon = document.querySelector('.burger-icons');

window.onscroll = () => {
  if(document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = "#fff";
    navbar.style.padding = "1rem 2rem";
    navbar.style.boxShadow = "0 1px 2px rgba(0,0,0,.5)";
    links.forEach(link => {
      link.style.color = "#111";
		});
		burgerIcon.style.top = '1rem';

  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.padding = "1.5rem 2rem";
    navbar.style.boxShadow = "none";
    links.forEach(link => {
      link.style.color = "#fff";
		});
		burgerIcon.style.top = '1.3rem';		
  }
}

burgerIcon.addEventListener('click', () => {
	mobileNavbar.classList.toggle('show-nav');
});
