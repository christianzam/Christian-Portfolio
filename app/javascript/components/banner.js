import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["The right candidate", "Christian Zamora"],
    typeSpeed: 90,
    loop: true
  });
}

export { loadDynamicBannerText };