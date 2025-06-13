document.addEventListener("DOMContentLoaded", function() {
    // Menambahkan efek hover pada artikel
    const articles = document.querySelectorAll(".articles article");
    articles.forEach(article => {
        article.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s ease-in-out";
        });
        article.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Menampilkan notifikasi saat link 'Baca Selengkapnya' diklik
    const readMoreLinks = document.querySelectorAll(".articles a");
    readMoreLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Mencegah navigasi default
            alert("Fitur ini masih dalam pengembangan!");
        });
    });
});
