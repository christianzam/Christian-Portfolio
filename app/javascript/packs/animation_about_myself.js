/* CSS 
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

// add the below to home.html.erb
// <div id="myDIV" class="myFunction">ABOUT</div>

*/
const animationAboutMyself = () => {
    
  const x = document.getElementById("myDIV");
    x.addEventListener("click", () => {
      console.log("animation done")
      x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
      
      // Code for Chrome, Safari and Opera
      x.addEventListener("webkitAnimationStart", myStartFunction);
      x.addEventListener("webkitAnimationIteration", myRepeatFunction);
      x.addEventListener("webkitAnimationEnd", myEndFunction);
      
      
      function myStartFunction() {
        this.innerHTML = "MYSELF";
        this.style.color="yellow";
        //this.style.backgroundColor = "transparent";
      }
      
      function myRepeatFunction() {
        this.innerHTML = "ABOUT";  
      }
      
      function myEndFunction() {
        this.innerHTML = "";
      }
      
    });
  
};


export { animationAboutMyself };

//const x = document.getElementById("myDIV");
// Start the animation with JavaScript

