const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuario');
const { expect } = require('chai');

describe('Testar as funcoes de gestao de usuarios', function () {
    it('validar que posso adicionar um novo nome de usuario na lista', function () {
        adicionarNovoUsuario('Maria');
        const listaDeUsuarios = retornarUsuarios();
        expect(listaDeUsuarios.at(-1)).to.equal('Maria');
    });
})