const buttonClick = () => {
  const button = document.querySelector("#clicker");
  const ball = document.querySelector("#target");
   
    button.addEventListener("click", () => {
      console.log("times pressed")
      window.requestAnimationFrame(function() {
        document.getElementById("target").classList.remove('animate');   
        window.requestAnimationFrame(function() {
          document.getElementById("target").classList.add('animate');
        });
      });
    });
};

export { buttonClick };

