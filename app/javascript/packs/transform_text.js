// NOTE: USE WHEN NEEDED TO SHOW TRANSFORM WITH HOVER

const transformText = () => {
  const bannerText = document.querySelector("#about-myself");
    bannerText.addEventListener("mouseover", () => {
      console.log("you have hovered")
      bannerText.classList.toggle("myself-text")
    });
};

export { transformText };
