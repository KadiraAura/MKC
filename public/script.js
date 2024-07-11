document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const message = name ? `Hello, ${name}!` : 'Please enter your name.';
    document.getElementById('greetingMessage').textContent = message;
});
