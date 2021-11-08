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
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  //Video script
  let video = document.getElementById("myVideo");
  // Get the button
  let btn = document.getElementById("myBtn");

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

  let modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  // to all images -- note I'm using a class!
  let images = document.getElementsByClassName('myImages');
  let img = document.getElementById("myImg");
  let modalImg = document.getElementById("img01");
  let captionText = document.getElementById("caption");
  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }
  
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }