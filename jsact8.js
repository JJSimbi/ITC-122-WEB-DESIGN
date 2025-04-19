function swapButtons() {
    // Get references to the buttons
    const btnLeft = document.getElementById("btnLeft");
    const btnRight = document.getElementById("btnRight");

    // Swap the texts
    const leftText = btnLeft.innerHTML;
    const rightText = btnRight.innerHTML;

    btnLeft.innerHTML = rightText;
    btnRight.innerHTML = leftText;

    // Swap the button classes
    if (btnLeft.classList.contains("bsit")) {
        btnLeft.classList.remove("bsit");
        btnLeft.classList.add("bscs");
        btnRight.classList.remove("bscs");
        btnRight.classList.add("bsit");
    } else {
        btnLeft.classList.remove("bscs");
        btnLeft.classList.add("bsit");
        btnRight.classList.remove("bsit");
        btnRight.classList.add("bscs");
    }
}