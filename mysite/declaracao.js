document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', () => {
        const comments = button.nextElementSibling;
        if (comments.style.display === 'block') {
            comments.style.display = 'none';
        } else {
            comments.style.display = 'block';
        }
    });
});
