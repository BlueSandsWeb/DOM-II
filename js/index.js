const navLink = Array.from(document.getElementsByClassName('nav-link'));

navLink.forEach(function(el) {

  el.addEventListener('mouseover', (e) => {
    el.style.color = "red";
  });
  el.addEventListener('mouseout', (e) => {
    el.style.color = "black";
  });
  el.addEventListener('click', (e) => {
    el.style.transform = "scale(.95) translate(0,3px)";
    e.stopPropagation();
    e.preventDefault();
    window.setTimeout(() => { 
      el.style.transform = "scale(1) translate(0,0px)";
    }, 75);
  });
});

let header = document.querySelector('header');
header.addEventListener('click', (e) => {
  header.style.backgroundColor = "goldenrod";
  window.setTimeout(() => {header.style.backgroundColor = "white";}, 1000);
});

const page = document.querySelector('html');
page.addEventListener('keydown', (e) => {
  if(e.key === "Enter"){
    page.style.display = "none";
    window.setTimeout(() => {
      page.style.display = "block";
    }, 1000);
  }
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach((el) => {
  el.addEventListener('focus', (e) => {
    el.style.transform = "scale(1.1)";
  })
  el.addEventListener('focusout', (e) => {
    el.style.transform = "scale(1)";
  })
});

const mapImg = document.querySelectorAll('.img-content img');
mapImg.forEach((el) => {
  el.addEventListener('load', (e) => {
    window.setTimeout(() => {
      el.style.transform = "rotate(0.5turn)";
    }, 2000);
  });
});

const p = document.querySelectorAll('p');
p.forEach((el) => {
  el.addEventListener('dblclick', (e) => {
    el.style.fontSize = "2rem";
  });
});