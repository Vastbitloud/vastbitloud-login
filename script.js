// Seleciona elementos
const userInput = document.getElementById("user");
const passInput = document.getElementById("pass");

// Função para exibir mensagens estilizadas
function showMessage(message, type = "error") {
  let msgDiv = document.createElement("div");
  msgDiv.textContent = message;
  msgDiv.style.position = "fixed";
  msgDiv.style.top = "20px";
  msgDiv.style.left = "50%";
  msgDiv.style.transform = "translateX(-50%)";
  msgDiv.style.padding = "12px 20px";
  msgDiv.style.backgroundColor = type === "error" ? "#ff4d4d" : "#4CAF50";
  msgDiv.style.color = "#fff";
  msgDiv.style.borderRadius = "8px";
  msgDiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  msgDiv.style.zIndex = "9999";
  msgDiv.style.fontSize = "14px";
  document.body.appendChild(msgDiv);

  setTimeout(() => {
    msgDiv.remove();
  }, 2500);
}

// Cadastro
function registerUser() {
  const user = userInput.value.trim();
  const pass = passInput.value.trim();

  if (!user || !pass) {
    showMessage("Preencha todos os campos!");
    return;
  }

  localStorage.setItem("vast_user", user);
  localStorage.setItem("vast_pass", pass);

  showMessage("Conta criada com sucesso!", "success");

  // Limpa campos
  userInput.value = "";
  passInput.value = "";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

// Login
function login() {
  const user = userInput.value.trim();
  const pass = passInput.value.trim();

  const savedUser = localStorage.getItem("vast_user");
  const savedPass = localStorage.getItem("vast_pass");

  if (user === savedUser && pass === savedPass) {
    showMessage("Login realizado com sucesso!", "success");
    setTimeout(() => {
      window.location.href = "https://sites.google.com/view/vastbitloud";
    }, 1000);
  } else {
    showMessage("Usuário ou senha incorretos!");
    // Apaga senha do campo
    passInput.value = "";
  }
}

// Permite "Enter" para enviar formulário
[userInput, passInput].forEach(input => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      document.activeElement === passInput ? login() : null;
    }
  });
});
