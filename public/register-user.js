      // Get the signup form
      var signupForm = document.getElementById("signup-form");
      // Get the login form
      var loginForm = document.getElementById("login-form");
      // Add an event listener to the signup form
      signupForm.addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();
        // Get the username and password from the form
        var username = signupForm.elements["cust_id"].value;
        var password = signupForm.elements["cust_password"].value;
        // Store the username and password in local storage
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        // Redirect the user to the home page
        window.location.href = "register.html";
      });
      // Add an event listener to the login form
      loginForm.addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();
        // Get the username and password from the form
        var username = loginForm.elements["code"].value;
        var password = loginForm.elements["password"].value;
        // Get the username and password from local storage
        var storedUsername = sessionStorage.getItem("username");
        var storedPassword = sessionStorage.getItem("password");
        // Check if the username and password match
        if (username == storedUsername && password == storedPassword) {
          // Redirect the user to the home page
          window.location.href = "info.html";
        } else {
          // Alert the user that the username and password are incorrect
          alert("Incorrect username or password");
        }
      });