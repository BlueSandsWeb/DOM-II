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
    window.setTimeout(() => { 
      el.style.transform = "scale(1) translate(0,0px)";
    }, 75);
  });
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

const mapImg = document.querySelectorAll('.img-content');
mapImg.forEach((el) => {
  el.addEventListener('load', (e) => {
    // el.style.
    console.log(e);
  });
});


// My attempt at making the entire nav bar draggable.  Will try further later

// const dragItem = document.querySelector('.main-navigation');
// const container = document.querySelector('body');
// let active = false;
// let currentX;
// let currentY;
// let initialX;
// let initialY;
// let xOffset = 0;
// let yOffset = 0;

// container.addEventListener("touchstart", dragStart, false);
// container.addEventListener("touchend", dragEnd, false);
// container.addEventListener("touchmove", drag, false);

// container.addEventListener("mousedown", dragStart, false);
// container.addEventListener("mouseup", dragEnd, false);
// container.addEventListener("mousemove", drag, false);

// function dragStart(e) {
//   if (e.type === "touchstart") {
//     initialX = e.touches[0].clientX - xOffset;
//     initialY = e.touches[0].clientY - yOffset;
//   } else {
//     initialX = e.clientX - xOffset;
//     initialY = e.clientY - yOffset;
//   }

//   if (e.target === dragItem) {
//     active = true;
//   }
// }

// function dragEnd(e) {
//   initialX = currentX;
//   initialY = currentY;

//   active = false;
// }

// function drag(e) {
//   if (active) {

//     e.preventDefault();

//     if (e.type === "touchmove") {
//       currentX = e.touches[0].clientX - initialX;
//       currentY = e.touches[0].clientY - initialY;
//     } else {
//       currentX = e.clientX - initialX;
//       currentY = e.clientY - initialY;
//     }

//     xOffset = currentX;
//     yOffset = currentY;

//     setTranslate(currentX, currentY, dragItem);
//   }
// }

// function setTranslate(xPos, yPos, el) {
//   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
// }