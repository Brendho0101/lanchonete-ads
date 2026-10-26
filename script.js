
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("form-cadastro");
    const senha = document.getElementById("senha");
    const confirmaSenha = document.getElementById("confirma-senha");
    const mensagem = document.getElementById("mensagem");

    if (!formulario || !senha || !confirmaSenha || !mensagem) {
        console.error("Erro: não foi possível encontrar os elementos do formulário.");
        return;
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        mensagem.textContent = "";
        mensagem.className = "";

        // Verifica o tamanho da senha
        if (senha.value.length < 6) {
            mensagem.textContent =
                "Erro: a senha precisa ter pelo menos 6 caracteres.";
            mensagem.className = "erro";
            return;
        }

        // Verifica se as senhas são iguais
        if (senha.value !== confirmaSenha.value) {
            mensagem.textContent = "Erro: as senhas não são iguais.";
            mensagem.className = "erro";
            return;
        }

        // Cadastro validado com sucesso
        mensagem.textContent =
            "Cadastro realizado com sucesso! Entrando...";
        mensagem.className = "sucesso";

        // Aguarda 1 segundo e abre o cardápio
        setTimeout(() => {
            window.location.href = "cardapio.html";
        }, 1000);
    });

});





