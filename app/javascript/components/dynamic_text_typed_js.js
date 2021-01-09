import Typed from 'typed.js';

const dynamicTextTypedJS = () => {
  new Typed('#nav-typed-text', {
    strings: ["<span style='color:white'> Hello world </span>","<span style='color:white'> I <span style='color:yellow'> &nbsp; am </span> </span>"],
    typeSpeed: 130,
    startDelay: 200,
    loop: false, 
  }); 
}

export { dynamicTextTypedJS };

/* 'git push --force ^1000\n `pushed to origin with option force`'

*/