document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const careerStats = document.getElementById("career-stats");
    const seasonStats = document.getElementById("season-stats");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            if (tab.dataset.target === "career") {
                careerStats.style.display = "grid";
                seasonStats.style.display = "none";
            } else {
                careerStats.style.display = "none";
                seasonStats.style.display = "grid";
            }
        });
    });
});
