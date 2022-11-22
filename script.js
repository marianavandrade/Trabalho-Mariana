function verificar() {
    let nome = document.getElementById('nome').value;
    let login = document.getElementById('login').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let csenha = document.getElementById('csenha').value;

    if ((nome == "") || (login == "") || (email == "") || (senha == "") || (csenha == "")) {
        document.getElementById('msg').innerHTML = "Preencha todos os campos"
    }

    if (nome.length > 10) {
        localStorage.setItem('nome', nome);
    } else {
        document.getElementById('erroNome').innerHTML = "O nome precisa ter mais de 10 caracteres"
    }

    if (login.length < 10) {
        localStorage.setItem('login', login);
    } else {
        document.getElementById('erroLogin').innerHTML = "O login precisa ter menos de 10 caracteres"
    }

    for (let i=0; i<email.length; i++) {
        if (email[i] == "@") {
            localStorage.setItem('email', email);
            break
        }
    }

    if (senha == csenha) {
        localStorage.setItem('senha', senha);
    } else {
        document.getElementById('erroSenha').innerHTML = "As senhas não são iguais"
    }

    if (localStorage.length == 4) {
        window.location = "index.html"
    }
}