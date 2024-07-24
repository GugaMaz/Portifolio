// Função para Abrir o Modal Usuário e Senha
function modalNotasAlunos() {
    
    document.getElementById('modal-notas-alunos').style.display = 'block';
    document.getElementById('tit-modal-notas').innerHTML = 'Login';

}


// Função para Fechar o Modal Usuário e Senha
function closeModal() {
    
    document.getElementById('modal-notas-alunos').style.display = 'none';
    
    
}

// Validador de Usuario e Senhas

const users = [
    { matricula: '1232184737', senha: 'Adryan21!'},
    { matricula: '1234567890' , senha: 'Heitor23!'}
];

document.getElementById('dados-alunos').addEventListener('submit', (e) => {
    e.preventDefault()

    const matricula = document.getElementById('matricula').value
    const senha = document.getElementById('senha').value

    const autenticadorDeUsuarios = users.find(usuario => usuario.matricula === matricula && usuario.senha === senha)

    if(autenticadorDeUsuarios) {
        alert('Seja-Bem Vindo ao seu Portal IDFG')
        perfilAlunos()
        closeModal()
        
    } else {
        alert('Matricula ou senha incorretos, tente novamente.')
    }

})


// Função para abrir modal do perfil dos Alunos 
function perfilAlunos() {

    document.getElementById('modal-perfil-alunos').style.display = 'block'
    document.getElementById('tit-modal-perfil-alunos').innerHTML = 'Perfil do Aluno'

}

function closeModalPerfil() {

    document.getElementById('modal-perfil-alunos').style.display = 'none'

}

