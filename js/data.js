document.addEventListener("DOMContentLoaded", () => {
    const localStorageData = document.getElementById("data");

    localStorageData.innerHTML = localStorage.getItem("info");
})