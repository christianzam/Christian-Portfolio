
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


export { moveContainer };

//const x = document.getElementById("myDIV");
// Start the animation with JavaScript


/*
export { myFunction };
export { myStartFunction };
export { myRepeatFunction };
export { myEndFunction };
*/
