function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'kanav' && password === 'kanav') {
        window.location.href = 'hero_page.html';  
        return false;
    } else {
        errorMessage.textContent = 'Invalid username or password';
        return false;
    }
}
