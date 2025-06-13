const form = document.getElementById("articleForm");
const previewArea = document.getElementById("previewArea");

let articles = [];
let editingIndex = -1; // Jika sedang edit, simpan index-nya

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const imageFile = document.getElementById("image").files[0];
  const category = document.getElementById("category").value;

  const reader = new FileReader();

  reader.onload = function () {
    const articleData = {
      title,
      content,
      image: reader.result,
      category
    };

    if (editingIndex > -1) {
      articles[editingIndex] = articleData;
      editingIndex = -1;
    } else {
      articles.push(articleData);
    }

    form.reset();
    showCategory(category);
  };

  if (imageFile) {
    reader.readAsDataURL(imageFile);
  } else {
    const image = editingIndex > -1 ? articles[editingIndex].image : "";
    const articleData = {
      title,
      content,
      image,
      category
    };

    if (editingIndex > -1) {
      articles[editingIndex] = articleData;
      editingIndex = -1;
    } else {
      articles.push(articleData);
    }

    form.reset();
    showCategory(category);
  }
});

function showCategory(cat) {
  previewArea.innerHTML = `<h3>Artikel kategori: ${cat}</h3>`;
  const filtered = articles
    .map((a, i) => ({ ...a, index: i }))
    .filter(a => a.category === cat);

  if (filtered.length === 0) {
    previewArea.innerHTML += "<p>Tidak ada artikel.</p>";
  } else {
    filtered.forEach(a => {
      const div = document.createElement("div");
      div.className = "article";
      div.innerHTML = `
  <h4>${a.title}</h4>
  ${a.image ? `<img src="${a.image}" />` : ""}
  <p>${a.content}</p>
  <div class="controls">
    <button onclick="editArticle(${a.index})">Edit</button>
    <button onclick="deleteArticle(${a.index}, '${cat}')">Hapus</button>
  </div>
`;

      previewArea.appendChild(div);
    });
  }
}

function deleteArticle(index, category) {
  if (confirm("Yakin ingin menghapus artikel ini?")) {
    articles.splice(index, 1);
    showCategory(category);
  }
}

function editArticle(index) {
  const article = articles[index];
  document.getElementById("title").value = article.title;
  document.getElementById("content").value = article.content;
  document.getElementById("category").value = article.category;
  document.getElementById("image").value = ""; // Tidak bisa set ulang file input
  editingIndex = index;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
