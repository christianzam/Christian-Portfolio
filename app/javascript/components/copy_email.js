function copyEmail() {
  /* Get the text field */
  var copyText = document.getElementById("eMailAddress");
  
    console.log("you have clicked")

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied :" + copyText.value);
 
}

export { copyEmail };

//copyText.addEventListener("click", () => {   });