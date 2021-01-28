function showDate() {
	document.getElementById("show-date").innerHTML=Date();
}
window.onload = showDate;

export { showDate };