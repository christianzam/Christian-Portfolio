const transformText = () => {
  const img = document.querySelector("#about-myself");
    img.addEventListener("mouseover", () => {
      console.log("you have hoevered")
      img.classList.toggle("about-text")
    });
};

export { transformText };

/*
const changePlaceholder = () => {
  const input = document.getElementById("about-myself");
  window.addEventListener("load", () => {
    input.value = "";
  });
};


export { changePlaceholder };

*/