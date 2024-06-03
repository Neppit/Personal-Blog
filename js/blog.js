document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');

    // Retrieve posts from localStorage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Display posts
    if (posts.length > 0) {
        posts.forEach(function(post) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <span>Author: ${post.username}</span>
            `;
            postsContainer.appendChild(postElement);
        });
    } else {
        postsContainer.innerHTML = '<p>No posts available.</p>';
    }
});