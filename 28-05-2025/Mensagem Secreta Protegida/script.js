const textarea = document.getElementById("mensagem");
const inputSenha = document.getElementById("senha");
const btnToggle = document.getElementById("toggleBtn");
const btnTheme = document.getElementById("toggleTheme");
const mensagemSecreta = document.getElementById("mensagemSecreta");

let visivel = false;
let senhaDefinida = "0123";
btnToggle.addEventListener("click", () => {
    if (!visivel) {
        const senhaUsuario = inputSenha.value.trim();
        if (!senhaUsuario) {
            alert
            ("Por favor, defina uma senha antes de mostrar a mensagem.");
            return;
        }
        senhaDefinida = senhaUsuario;
        const senhaDigitada = prompt
         ("Digite a senha para acessar a mensagem:");
         if (senhaDigitada !== senhaDefinida) {
            alert("Senha incorreta!");
            return;
         }
         mensagemSecreta.textContent = textarea.value.trim() || "(vazio)"
         mensagemSecreta.classList.remove("escondido");
         btnToggle.textContent = "Ocultar";
         visivel = true;
    } else {
        mensagemSecreta.classList.add("escondido");
        btnToggle.textContent = "Mostrar";
        visivel = false;
    }
});
btnTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnTheme.textContent = 
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});