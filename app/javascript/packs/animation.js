const moveContainer = () => {
  const x = document.getElementById("myDIV");
    x.addEventListener("click", () => {
      console.log("animation done")
      
        x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
      
      
      // Code for Chrome, Safari and Opera
      x.addEventListener("webkitAnimationStart", myStartFunction);
      x.addEventListener("webkitAnimationIteration", myRepeatFunction);
      x.addEventListener("webkitAnimationEnd", myEndFunction);
      
      
      function myStartFunction() {
        this.innerHTML = "animationstart event occured - The animation has started";
        this.style.backgroundColor = "pink";
      }
      
      function myRepeatFunction() {
        this.innerHTML = "animationiteration event occured - The animation was played again";
        this.style.backgroundColor = "lightblue";
      }
      
      function myEndFunction() {
        this.innerHTML = "animationend event occured - The animation has completed";
        this.style.backgroundColor = "lightgray";
      }
      
    });
};

export { moveContainer };

//const x = document.getElementById("myDIV");
// Start the animation with JavaScript


/*
export { myFunction };
export { myStartFunction };
export { myRepeatFunction };
export { myEndFunction };
*/
