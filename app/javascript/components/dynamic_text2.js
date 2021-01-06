import Typed from 'typed.js';

const loadDynamicText2 = () => {
  new Typed('#nav-typed-text2', {
    strings: ["<span style= 'color:white'> ^5000 Christian<span style='color:white'>Z<span style='color:yellow'>am<span style='color:white'>ora</span></span></span></span>"],
    typeSpeed: 130,
    startDelay: 400,
    loop: false, 
  }); 
}

export { loadDynamicText2 };