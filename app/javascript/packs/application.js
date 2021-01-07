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

//import { animationAboutMyself } from "../packs/animation_about_myself";
//import { transformText } from "../packs/transform_text";
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { dynamicTextTypedJS } from '../components/dynamic_text_typed_js';
import { dynamicTextTypedJS2 } from '../components/dynamic_text_typed_js_2';
import { initSweetalert } from "../packs/init_sweetalert";
import { buttonClick } from "../packs/button_click";

document.addEventListener('turbolinks:load', () => {
  //transformText();
  //animationAboutMyself();
  initUpdateNavbarOnScroll();
  dynamicTextTypedJS();
  dynamicTextTypedJS2();
  initSweetalert();
  buttonClick();

});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log("hello world again");
