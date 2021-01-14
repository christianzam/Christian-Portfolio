/*  THIS ANIMATION MOVES VERTICALLY CHANGING TEXT EVERY CYCLE


------CSS-------- 
#myDIV {
  position: relative;
  font-size: 40px;
  font-family: $titles;
  &:hover {
    color: yellow;
    transition-duration: 0.3s;
    cursor: pointer;
  }
}

// Chrome, Safari, Opera 
@-webkit-keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}

@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}

// ----------HTML-----------------
// add the below to home.html.erb
// <div id="myDIV" class="myFunction">ABOUT</div>
*/

const animationAboutMyself = () => {

    
  const x = document.getElementById("myDIV");
    window.addEventListener("scroll", () => {
      console.log("animation done")
       
          window.requestAnimationFrame(function() {
            document.getElementById("myDIV").classList.remove('mymove');   
            window.requestAnimationFrame(function() {
              document.getElementById("myDIV").classList.add('mymove');
            });
          });
      
      

    });
  
};


export { animationAboutMyself };



//const x = document.getElementById("myDIV");
// Start the animation with JavaScript

