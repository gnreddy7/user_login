// SIGNUP
function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem(email, password);
  alert("Signup successful!");
  window.location.href = "index.html";
}

// LOGIN
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedPassword = localStorage.getItem(email);

  if (storedPassword === password) {
    alert("Login successful!");
  } else {
    alert("Invalid email or password");
  }
}

// RESET PASSWORD
function resetPassword() {
  const email = document.getElementById("forgotEmail").value;
  const newPassword = document.getElementById("newPassword").value;

  if (!localStorage.getItem(email)) {
    alert("User not found");
    return;
  }

  localStorage.setItem(email, newPassword);
  alert("Password updated successfully!");
  window.location.href = "index.html";
}