// This file is automatically compiled by Webpack, along with any other files
// present in this directory.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'sweetalert';
import 'sweetalert2';
import 'bootstrap';

//import { initSweetalert } from "../packs/init_sweetalert";
//import { animationAboutMyself } from "../components/animation_about_myself";
//import { transformText } from "../components/transform_text";
import { animationTopBottomButton } from "../components/animation_top_bottom_button";
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { dynamicTextTypedJS } from '../components/dynamic_text_typed_js';
//import { dynamicTextTypedJS2 } from '../components/dynamic_text_typed_js_2';
import { movingArrows } from "../components/moving_arrows";

document.addEventListener('turbolinks:load', () => {
  //initSweetalert();
  //transformText();
  //animationAboutMyself();
  animationTopBottomButton();
  initUpdateNavbarOnScroll();
  dynamicTextTypedJS();
  movingArrows();
  //dynamicTextTypedJS2();
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log("hello world again");
