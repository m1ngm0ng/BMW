// var acc = document.getElementsByClassName("accordion-button");
// var img = document.getElementById("changeable-image");
// var imgSources = ["/public/images/tech01.png", "/public/images/tech02.png", "/public/images/tech03.png"];
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         var index = Array.from(acc).indexOf(this);
//         var activeButton = document.querySelector('.accordion-button.active');

//         if (activeButton && activeButton !== this) {
//             activeButton.classList.remove('active');
//             activeButton.nextElementSibling.style.maxHeight = null;
//         }

//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;

//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }

//         img.src = imgSources[index];
//     });
// }

var acc = document.getElementsByClassName("accordion-button");
var img = document.getElementById("changeable-image");
var imgSources = ["/public/images/tech01.png", "/public/images/tech02.png", "/public/images/tech03.png"];
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var index = Array.from(acc).indexOf(this);
    var activeButton = document.querySelector('.accordion-button.active');

    if (activeButton && activeButton !== this) {
      activeButton.classList.remove('active');
      activeButton.nextElementSibling.style.maxHeight = null;
    }
    

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 

    img.src = imgSources[index];
    img.style.right = '-100%';
    setTimeout(function() {
      img.style.right = '0';
    }, 100);
  });
}
acc[0].classList.add('active');
acc[0].nextElementSibling.style.maxHeight = acc[0].nextElementSibling.scrollHeight + "px";


// var acc = document.getElementsByClassName("accordion-button");
// var img = document.getElementById("changeable-image");
// var imgSources = ["/public/images/tech01.png", "/public/images/tech02.png", "/public/images/tech03.png"];
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     var index = Array.from(acc).indexOf(this);
//     var activeButton = document.querySelector('.accordion-button.active');

//     if (activeButton && activeButton !== this) {
//       activeButton.classList.remove('active');
//       activeButton.nextElementSibling.style.maxHeight = null;
//     }
    

//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
    
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 

//     img.src = imgSources[index];
//     img.style.right = '-100%';
//     setTimeout(function() {
//       img.style.right = '0';
//     }, 100);
//   });
// }
// acc[0].classList.add('active');
// acc[0].nextElementSibling.style.maxHeight = acc[0].nextElementSibling.scrollHeight + "px";
