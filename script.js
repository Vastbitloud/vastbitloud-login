// Validação simples
function validarCampos(phone, pass) {
  if (!phone || !pass) {
    alert("Preencha todos os campos!");
    return false;
  }
  return true;
}

// Cadastro
function registerUser() {
  const phone = document.getElementById("phone").value.trim();
  const pass = document.getElementById("pass").value.trim();

  if (!validarCampos(phone, pass)) return;

  // Salva dados no localStorage
  localStorage.setItem("vast_phone", phone);
  localStorage.setItem("vast_pass", pass);

  alert("Conta criada com sucesso!");
  window.location.href = "login.html";
}

// Login
function login() {
  const phone = document.getElementById("phone").value.trim();
  const pass = document.getElementById("pass").value.trim();

  if (!validarCampos(phone, pass)) return;

  const savedPhone = localStorage.getItem("vast_phone");
  const savedPass = localStorage.getItem("vast_pass");

  if (phone === savedPhone && pass === savedPass) {
    window.location.href = "https://sites.google.com/view/vastbitloud";
  } else {
    alert("Telefone ou senha incorretos!");
  }
}
