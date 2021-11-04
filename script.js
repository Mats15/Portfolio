//hover and animation
const portfolioitems = document.querySelectorAll('.portfolio-item-wrapper')
    

portfolioitems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover',() => {
        portfolioItem.childNodes[1].classList;
        portfolioItem.childNodes[1].classList.add('img-darken');

        
    })

    portfolioItem.addEventListener('mouseout',() => {
        portfolioItem.childNodes[1].classList;
        portfolioItem.childNodes[1].classList.remove('img-darken');
        
        
    })
})  

const portfolioitems1 = document.querySelectorAll('.portfolio-item-wrapper2')


portfolioitems1.forEach(portfolioItem1 => {
    portfolioItem1.addEventListener('mouseover',() => {
        portfolioItem1.childNodes[1].classList;
        portfolioItem1.childNodes[1].classList.add('img-darken');

        
    })

    portfolioItem1.addEventListener('mouseout',() => {
        portfolioItem1.childNodes[1].classList;
        portfolioItem1.childNodes[1].classList.remove('img-darken');
        
        
    })
})  

//Drop Nav js
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  //Video script
  var video = document.getElementById("myVideo");
  // Get the button
  var btn = document.getElementById("myBtn");

  // Pause and play the video, and change the button text
  function PauseFunction() {
      if (video.paused) {
          video.play();
          btn.innerHTML = "Pause";
      } else {
          video.pause();
          btn.innerHTML = "Play";
      }
  }