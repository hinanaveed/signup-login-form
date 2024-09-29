// Toggle between signup and login forms
document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
  });
  
  document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
  });
  
  // Handle signup
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    const user = {
      username: username,
      email: email,
      password: password
    };
  
    // Store the user data in localStorage using email as key
    localStorage.setItem(email, JSON.stringify(user));
    alert('Sign up successful! You can now login.');
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
  });
  
  // Handle login
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Retrieve user data from localStorage by email
    const storedUser = JSON.parse(localStorage.getItem(email));
  
    // Check if user exists and if password matches
    if (storedUser && storedUser.password === password) {
      alert('Login successful!');
      // Proceed with logged-in actions, such as redirecting to a dashboard
    } else {
      alert('Invalid email or password!');
    }
  });
  
  
  
  