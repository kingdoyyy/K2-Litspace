document.addEventListener("DOMContentLoaded", () => {
    const commentList = document.getElementById("commentList");
    const commentForm = document.getElementById("commentForm");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const comment = document.getElementById("comment").value.trim();

        if (name && comment) {
            const newComment = createCommentElement(name, comment);
            commentList.appendChild(newComment);
            commentForm.reset();
        }
    });

    function createCommentElement(name, text) {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";

        const commentContent = document.createElement("p");
        commentContent.innerHTML = `<strong>${name}</strong>: <span class="comment-text">${text}</span>`;
        commentDiv.appendChild(commentContent);

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "comment-actions";

        const replyBtn = createButton("Balas", () => {
            if (!commentDiv.querySelector(".reply-form")) {
                const replyForm = createReplyForm(commentDiv);
                commentDiv.appendChild(replyForm);
            }
        });

        const editBtn = createButton("Edit", () => {
            const commentText = commentDiv.querySelector(".comment-text");
            const currentText = commentText.textContent;
            const newText = prompt("Edit komentar:", currentText);
            if (newText !== null && newText.trim() !== "") {
                commentText.textContent = newText.trim();
            }
        });

        const deleteBtn = createButton("Hapus", () => {
            if (confirm("Yakin ingin menghapus komentar ini?")) {
                commentDiv.remove();
            }
        });

        actionsDiv.appendChild(replyBtn);
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);
        commentDiv.appendChild(actionsDiv);

        return commentDiv;
    }

    function createReplyForm(parentComment) {
        const form = document.createElement("form");
        form.className = "reply-form";

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Nama Anda";
        nameInput.required = true;

        const textInput = document.createElement("textarea");
        textInput.rows = 2;
        textInput.placeholder = "Balasan Anda...";
        textInput.required = true;

        const sendBtn = document.createElement("button");
        sendBtn.type = "submit";
        sendBtn.textContent = "Kirim";

        form.appendChild(nameInput);
        form.appendChild(textInput);
        form.appendChild(sendBtn);

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = nameInput.value.trim();
            const text = textInput.value.trim();
            if (name && text) {
                const reply = createCommentElement(name, text);
                reply.classList.add("reply");
                parentComment.appendChild(reply);
                form.remove();
            }
        });

        return form;
    }

    function createButton(label, onClick) {
        const btn = document.createElement("button");
        btn.textContent = label;
        btn.addEventListener("click", onClick);
        return btn;
    }
});
