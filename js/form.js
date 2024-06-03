document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blog-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (username && title && content) {
            const post = {
                username: username,
                title: title,
                content: content
            };

            // Retrieve existing posts from localStorage
            let posts = JSON.parse(localStorage.getItem('posts')) || [];

            // Add new post to the array
            posts.push(post);

            // Save the updated posts array back to localStorage
            localStorage.setItem('posts', JSON.stringify(posts));

            // Redirect to blog page
            window.location.href = 'blog.html';
        } else {
            alert('Please complete all fields.');
        }
    });
});