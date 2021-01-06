import Typed from 'typed.js';

const loadDynamicText2 = () => {
  new Typed('#nav-typed-text2', {
    strings: ["<span style= 'color:white'> ^5000 Christian &nbsp; Zamora </span>"],
    typeSpeed: 130,
    startDelay: 400,
    loop: false, 
  }); 
}

export { loadDynamicText2 };