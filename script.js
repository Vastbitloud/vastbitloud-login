// Função para validar campos
function validarCampos(user, pass, phone) {
  if (!user || !pass || !phone) {
    alert("Preencha todos os campos!");
    return false;
  }
  return true;
}

// Cadastro
function registerUser() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!validarCampos(user, pass, phone)) return;

  // Salva no localStorage
  localStorage.setItem("vast_user", user);
  localStorage.setItem("vast_pass", pass);
  localStorage.setItem("vast_phone", phone);

  alert("Conta criada com sucesso!");
  window.location.href = "login.html";
}

// Login
function login() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();

  if (!validarCampos(user, pass, "dummy")) return; // phone não necessário no login

  const savedUser = localStorage.getItem("vast_user");
  const savedPass = localStorage.getItem("vast_pass");

  if (user === savedUser && pass === savedPass) {
    window.location.href = "https://sites.google.com/view/vastbitloud";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}
