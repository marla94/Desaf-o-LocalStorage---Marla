document.addEventListener("DOMContentLoaded", () => {
    const buttonText = document.getElementById("buttonText");

    buttonText.addEventListener("click", saveData)

    function saveData() {
        let valueText = document.getElementById("inputText").value;

        if (valueText.trim() !== "") {
            localStorage.setItem("info", valueText);
        }
    }
})