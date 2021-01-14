const movingArrows = () => {   
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

export { movingArrows };

//const x = document.getElementById("myDIV");
// Start the animation with JavaScript
