// Cadastro
function registerUser(){
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if(!user || !pass){
    alert("Preencha tudo!");
    return;
  }

  localStorage.setItem("vast_user", user);
  localStorage.setItem("vast_pass", pass);

  alert("Conta criada com sucesso!");
  window.location.href = "login.html";
}

// Login
function login(){
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const savedUser = localStorage.getItem("vast_user");
  const savedPass = localStorage.getItem("vast_pass");

  if(user === savedUser && pass === savedPass){
    window.location.href = "https://sites.google.com/view/vastbitloud";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}
