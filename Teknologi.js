document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll("article");
    
    articles.forEach(article => {
        article.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#444";
            this.style.transition = "0.3s";
        });
        
        article.addEventListener("mouseout", function () {
            this.style.backgroundColor = "#333";
        });
    });

    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
