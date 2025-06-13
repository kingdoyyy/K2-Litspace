document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll("article a");
    
    articles.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Fitur baca selengkapnya masih dalam pengembangan!");
        });
    });
});
