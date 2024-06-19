document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const blogForm = document.getElementById('blogForm');
    const postsContainer = document.getElementById('postsContainer');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Simulate successful login
            window.location.href = 'blog.html';
        });
    }

    if (blogForm) {
        blogForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;

            // Create a new post element
            const post = document.createElement('div');
            post.classList.add('post');
            post.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
                <button class="delete-post">Delete</button>
            `;
            postsContainer.appendChild(post);

            // Add delete functionality
            post.querySelector('.delete-post').addEventListener('click', function () {
                postsContainer.removeChild(post);
            });

            // Clear the form
            blogForm.reset();
        });
    }
});

