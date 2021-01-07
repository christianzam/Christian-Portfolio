const transformText = () => {
  const bannerText = document.querySelector("#about-myself");
    bannerText.addEventListener("click", () => {
      console.log("you have clicked")
      bannerText.classList.toggle("myself-text")
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