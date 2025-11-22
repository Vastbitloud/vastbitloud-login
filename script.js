function validarCampos(phone, pass) {
  if (!phone || !pass) {
    alert("Preencha todos os campos!");
    return false;
  }
  return true;
}

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
