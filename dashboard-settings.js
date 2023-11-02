const hamburgerBtn = document.getElementById("hamburger");


hamburgerBtn.addEventListener("click", () => {
	const dropdown = hamburgerBtn.querySelector(".dropdown-content");
	dropdown.classList.toggle("visible");
});
