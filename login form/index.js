function validateform() {
    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;

    if (uname === "chandanapriya" && pwd === "123456") {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid username or password. Please check it and try again.");
        return false;
    }
}

