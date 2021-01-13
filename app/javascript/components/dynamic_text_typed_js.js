import Typed from 'typed.js';

const dynamicTextTypedJS = () => {
  new Typed('#nav-typed-text', {
    strings: ["<span style='color:white'> Hello world </span>","<span style='color:white'> I <span style='color:yellow'> am </span> </span><span style= 'color:white'> ^100 &nbsp; &nbsp; Christian<span style='color:white'>&nbsp;Z<span style='color:yellow'>am<span style='color:white'>ora</span></span></span></span>"],
    typeSpeed: 100,
    startDelay: 200,
    loop: false,
    
  }); 
}

export { dynamicTextTypedJS };

/* 'git push --force ^1000\n `pushed to origin with option force`'

*/