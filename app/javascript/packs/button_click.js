const buttonClick = () => {
  const button = document.querySelector("#clicker");
  const ball = document.querySelector("#target");
    button.addEventListener("click", () => {
      console.log("you have pressed")
      button.classList.remove("animate")
      
      ball.classList.add("animate")
      //ball.setTimeout(100)
      
    });
};

export { buttonClick };

/*
const buttonClick = () => {
  const xxx = document.querySelector("#clicker");
    xxx.addEventListener("click", () => {
      console.log("BUTTON pressed")
      xxx.removeClass("animate")
      setTimeout("#target.addClass('animate');",100)
    });
};



$('#clicker').click(function(){
  $target = $('#target');
  $target.removeClass('animate');
  setTimeout("$target.addClass('animate');",100)
});
*/
