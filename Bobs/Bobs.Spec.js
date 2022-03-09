///<reference types="cypress"/>
import BobsPO from './BobsObjects'

describe('Testes automatizados - Bobs', () => {


   it('Validar cardápio de sanduíches', function () {
      //Link de acesso a aplicação
      BobsPO.acessar()
      //Acessar variedades 
      BobsPO.validarMenuInicial()
      //Cardápio Sanduíches (10)
      BobsPO.validarCardapioSanduiches()
      //Informações sanduíche
      BobsPO.validarInfoSanduiche()
   })

   it('Cadastro no bobs fã', function () {
      //Link de acesso a aplicação
      BobsPO.acessarBobsFa()
      //Cadastro bob's fã
      BobsPO.cadastrarBobsFa()


   })

})