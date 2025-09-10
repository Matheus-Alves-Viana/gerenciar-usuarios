const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuario');
const { expect } = require('chai');

describe('Testar as funcoes de gestao de usuarios', function () {
    it('validar que posso adicionar um novo nome de usuario na lista', function () {
        adicionarNovoUsuario({
            nome: 'Maria',
            email: 'maria@maria.com'

        });
        const listaDeUsuarios = retornarUsuarios();
        expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
    });
})