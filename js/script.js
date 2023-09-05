document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.querySelector("footer a");

    backToTop.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
