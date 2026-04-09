document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".content section");

    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = "none";
        });
    }

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class
            links.forEach(l => l.classList.remove("active"));

            // Add active class
            this.classList.add("active");

            const targetId = this.getAttribute("href").substring(1);

            hideAllSections();

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block";
            }

            // ✅ Scroll to top smoothly
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

    // Default view
    hideAllSections();
    document.getElementById("intro").style.display = "block";
});