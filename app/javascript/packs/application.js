// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'sweetalert';
import 'sweetalert2';
import 'bootstrap';



import { initUpdateNavbarOnScroll } from '../components/navbar';
import { loadDynamicText } from '../components/dynamic_text';
import { loadDynamicText2 } from '../components/dynamic_text2';
import { initSweetalert } from "../packs/init_sweetalert";
import { transformText } from "../packs/about_myself";
document.addEventListener('turbolinks:load', () => {
  initUpdateNavbarOnScroll();
  loadDynamicText();
  loadDynamicText2();
  initSweetalert();
  transformText();   
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log("hello world again");
