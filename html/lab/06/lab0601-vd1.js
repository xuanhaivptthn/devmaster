function checkLoginCreds() {
  var usr = document.getElementById("username");
  var pwd = document.getElementById("password");
  if (usr.value == "") {
    document.getElementById("usernameError").innerHTML = "<br/> Tên đăng nhập không được bỏ trống"
    document.getElementById("usernameError").className = "error";
    username.focus();
  }
  if (pwd.value == "") {
    document.getElementById("passwordError").innerHTML = "<br/> Mật khẩu không được bỏ trống"
    document.getElementById("passwordError").className = "error";
    password.focus();
  }
}

