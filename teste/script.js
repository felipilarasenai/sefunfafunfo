const campoNovoLogin = document.getElementById('username')
const campoNovoEmail = document.getElementById('email')
const campoNovaSenha = document.getElementById('password')
const campoRepSenha = document.getElementById('rep-password')

function cadastrar(){
    if(campoNovaSenha.value != campoRepSenha.value || campoNovaSenha.value == '' || campoNovaSenha == null){
        alert('Senha invalida')
    }else{
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value,
            email: campoNovoEmail.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            
            bancoDeDados = [];
            
        }
        window.location.href='login.html'
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");  
    }
}