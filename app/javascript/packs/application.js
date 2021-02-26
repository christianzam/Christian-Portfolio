// This file is automatically compiled by Webpack, along with any other files
// present in this directory.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'sweetalert';
import 'sweetalert2';
import 'bootstrap';

//import { showDate} from "../components/show_date";
import { initUpdateNavbarOnScroll } from '../components/navbar';

document.addEventListener('turbolinks:load', () => {
  //showDate();
  initUpdateNavbarOnScroll();
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log("HELLO WORLD AGAIN, HAVE YOU FOUND WHAT YOU ARE LOOKING FOR?");