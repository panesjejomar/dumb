const container = document.querySelector(".container");
const yes_btn = document.querySelector(".yes-btn");
const no_btn = document.querySelector(".no-btn");

no_btn.addEventListener('click', () => {
	// at first click of no-btn, we add position absolute to it
	no_btn.style.position = "absolute";

	// random position
	const random_left = Math.floor(Math.random() * container.clientWidth);
	const random_top = Math.floor(Math.random() * container.clientHeight);
	// multiply with the container width to get random position inside the container only

	// can still go outside the container
	if(random_left >= container.clientWidth / 2)
	no_btn.style.left = `${random_left - no_btn.clientWidth}px`;


	if(random_top >= container.clientHeight / 2)
	no_btn.style.top = `${random_top - no_btn.clientWidth}px`;
})


yes_btn.addEventListener("click", () => {
	container.innerHTML = "<h1>Sabi na! 🤣🤣🤣🤣🤣🤣 hahaha</h1>"
})


