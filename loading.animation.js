function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}


const overlay = document.getElementsByClassName("container__overlay");
const signUpBtn = document.getElementById("bg-animation");
const container = document.getElementsByClassName("container__form");
const panel = document.getElementsByClassName("overlay__panel");

signUpBtn.addEventListener("click", function() {
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.top = "0";
    overlay.style.left = "0";
    container.style.display = "none";
    panel.style.display = "none";
});