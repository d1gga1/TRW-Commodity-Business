const availableElements = document.getElementsByClassName("status");

function isAvailable() {
    for (let i = 0; i < availableElements.length; i++) {
        const status = availableElements[i].textContent; // Assuming the status is in the text content
        if (status.trim() === "Active") {
            availableElements[i].classList.add("active");
        } else {
            availableElements[i].classList.add("expired");
        }
    }
}

isAvailable();
