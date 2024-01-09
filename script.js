function validateForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
  
    // Simple validation: Check if fields are empty
    if (username === '') {
      usernameError.textContent = 'Please enter a username';
    } else {
      usernameError.textContent = '';
    }
  
    if (email === '') {
      emailError.textContent = 'Please enter an email';
    } else {
      emailError.textContent = '';
    }
  
    if (password === '') {
      passwordError.textContent = 'Please enter a password';
    } else {
      passwordError.textContent = '';
    }
  
    if (confirmPassword === '') {
      confirmPasswordError.textContent = 'Please confirm the password';
    } else if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Passwords do not match';
    } else {
      confirmPasswordError.textContent = '';
    }
  }