function checkLoginCreds() {
  var usr = document.getElementById("username");
  var pwd = document.getElementById("password");
  if (usr.value == "") {
    document.getElementById("usrError").innerHTML = "Tên đăng nhập không được bỏ trống"
    username.focus();
  } else if (pwd.value == "") {
    alert("Mật khẩu không được bỏ trống");
    password.focus();
  }
}

