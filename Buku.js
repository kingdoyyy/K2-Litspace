document.addEventListener("DOMContentLoaded", function () {
    const booksContainer = document.querySelector(".books");

    // Daftar buku yang akan ditampilkan
    const books = [
        {
            title: "Atomic Habits",
            author: "James Clear",
            description: "Buku ini membahas bagaimana kebiasaan kecil dapat membawa perubahan besar dalam hidup.",
            link: "#"
        },
        {
            title: "The Power of Now",
            author: "Eckhart Tolle",
            description: "Panduan untuk menjalani kehidupan dengan lebih sadar dan menikmati momen saat ini.",
            link: "#"
        },
        {
            title: "Deep Work",
            author: "Cal Newport",
            description: "Buku ini menjelaskan pentingnya kerja fokus tanpa gangguan di era digital.",
            link: "#"
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            description: "Pelajaran keuangan yang membedakan mindset orang kaya dan miskin.",
            link: "#"
        },
        {
            title: "Think and Grow Rich",
            author: "Napoleon Hill",
            description: "Strategi sukses dan pola pikir untuk mencapai kekayaan dan kesuksesan.",
            link: "#"
        }
    ];

    // Menambahkan daftar buku ke halaman secara dinamis
    books.forEach(book => {
        let bookElement = document.createElement("article");
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Penulis:</strong> ${book.author}</p>
            <p>${book.description}</p>
            <a href="${book.link}">Baca Selengkapnya</a>
        `;
        booksContainer.appendChild(bookElement);
    });

    console.log("Halaman Buku telah dimuat dan daftar buku telah ditambahkan.");
});
