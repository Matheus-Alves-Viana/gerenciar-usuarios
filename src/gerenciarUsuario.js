const usuarios = [
    {
        nome: 'Matheus',
        email: 'matheus@matheus.com'
    },

    {
        nome: 'Lucas',
        email: 'lucas@lucas.com'

    },

    {
        nome: 'João',
        email: 'joao@joao.com'

    }
];




function retornarUsuarios(){
    return usuarios;
}    

 function adicionarNovoUsuario(nome){
        usuarios.push(nome);
}

 module.exports = {
        retornarUsuarios,
        adicionarNovoUsuario
}   


