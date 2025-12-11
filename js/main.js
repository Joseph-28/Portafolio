document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll("[data-toggle]");

    toggles.forEach(header => {
        header.addEventListener("click", () => {

            const section = header.closest(".section");
            const id = header.getAttribute("data-toggle");
            const content = document.getElementById(id);

            // Toggle estados
            section.classList.toggle("open");
            header.classList.toggle("open");
            content.classList.toggle("open");
        });
    });
});

