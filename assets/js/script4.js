function validation() {
    const userEl = document.getElementById("register-username");
    const emailEl = document.getElementById("register-email");
    const passEl = document.getElementById("register-password");
    const cpassEl = document.getElementById("register-cpassword");
    const result = document.getElementById("result");
    const popup = document.getElementById("popup");

    // If on forgot password page (only email field present)
    if (!userEl && emailEl) {
        const email = emailEl.value.trim();
        if (email === "") {
            result.textContent = "Please enter your registered email";
            result.style.color = "#ef4444";
            return false;
        }
        if (!email.includes("@") || !email.includes(".")) {
            result.textContent = "Please enter a valid email address";
            result.style.color = "#ef4444";
            return false;
        }
        if (popup) {
            popup.classList.add("open-slide");
        }
        return false;
    }

    // Registration page validations
    const username = userEl ? userEl.value.trim() : "";
    const email = emailEl ? emailEl.value.trim() : "";
    const password = passEl ? passEl.value : "";
    const cpassword = cpassEl ? cpassEl.value : "";

    if (username === "") {
        result.textContent = "Enter Username";
        return false;
    } else if (username.length < 6) {
        result.textContent = "At least six characters";
        return false;
    } else if (email === "") {
        result.textContent = "Enter your Email";
        return false;
    } else if (password === "") {
        result.textContent = "Enter your Password";
        return false;
    } else if (cpassword === "") {
        result.textContent = "Confirm your password";
        return false;
    } else if (password.length < 6) {
        result.textContent = "Password must be at least six characters";
        return false;
    } else if (password !== cpassword) {
        result.textContent = "Passwords do not match";
        return false;
    }

    // If all validations pass
    if (popup) {
        popup.classList.add("open-slide");
    }
    return false; // Prevent actual form submission for demo purposes
}
