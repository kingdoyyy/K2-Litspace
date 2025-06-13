document.addEventListener("DOMContentLoaded", function () {
    // Navigasi aktif saat diklik
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Mode gelap
    const toggleDarkMode = document.createElement("button");
    toggleDarkMode.textContent = "Dark Mode";
    toggleDarkMode.style.position = "fixed";
    toggleDarkMode.style.bottom = "20px";
    toggleDarkMode.style.right = "20px";
    toggleDarkMode.style.padding = "10px";
    toggleDarkMode.style.cursor = "pointer";
    document.body.appendChild(toggleDarkMode);

    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Tambahkan kelas dark-mode di CSS jika ingin mode gelap berfungsi
    const darkModeStyle = document.createElement("style");
    darkModeStyle.textContent = `
        .dark-mode {
            background-color: #121212;
            color: white;
        }
        .dark-mode header, .dark-mode footer {
            background-color: #0d0d0d;
        }
    `;
    document.head.appendChild(darkModeStyle);
});
