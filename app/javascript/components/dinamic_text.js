import Typed from 'typed.js';

const loadDynamicText = () => {
  new Typed('#nav-typed-text', {
    strings: ["Hello <span style='color:red'>world</span>", "I am", "Christian Zamora  ^6000"],
    typeSpeed: 130,
    startDelay: 200,
    backSpeed: 100,
    loop: true,
    
  });
}

export { loadDynamicText };

//'git push --force ^1000\n `pushed to origin with option force`'
