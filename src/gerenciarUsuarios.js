/*
    Exemplo:
    {
        primeiraPropriedade: 'Valor',
        segundaPropriedade: 'Valor'
    }
*/

const usuarios = [
    {
        Nome: 'Matheus',
        email: 'matheus@gospel.com'
    },
    { 
        Nome: 'Marcos',
        email: 'marcos@gospel.com'
    },
    { 
        Nome: 'Lucas',
        email: 'lucas@gospel.com'
    },
   { 
        Nome: 'João',
        email: 'joão@gospel.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}