class BobsPo {
    acessarBobs() {
        //Link de acesso a aplicação
        cy.visit('https://bobs.com.br/')
        //Aceitar cookies
        cy.get('.container > .btn').click()
    }

    validarCardapioSanduiche() {
        cy.scrollTo(0, 550) //<------- rolagem de tela
        //Cardápio Sanduíches (10)
        cy.get('.main-content-wrapper > .card-deck > :nth-child(1) > .card > .card-footer > .btn').click({ force: true })
        cy.scrollTo(0, 700) //<------- rolagem de tela 

        //1º lista de sanduíches
        cy.get('[style="position: absolute; left: 0px; top: 0px;"] > .card > .card-body').should('contain', 'Big Bob')
        cy.get('[style="position: absolute; left: 435px; top: 0px;"] > .card > .card-body').should('contain', 'Cheddar Australiano')

        cy.wait(2000)
        cy.scrollTo(0, 1300)

        //2º lista de sanduíches
        cy.get('[style="position: absolute; left: 0px; top: 620px;"] > .card > .card-body').should('contain', 'Double Cheeseburguer')
        cy.get('[style="position: absolute; left: 435px; top: 620px;"] > .card > .card-body').should('contain', 'Crispy Bacon')

        cy.wait(2000)
        cy.scrollTo(0, 1900)

        //3º lista de sanduíches
        cy.get('[style="position: absolute; left: 0px; top: 1240px;"] > .card > .card-body').should('contain', 'Big Bob Frango')
        cy.get('[style="position: absolute; left: 435px; top: 1240px;"] > .card > .card-body').should('contain', 'Cheddar Australiano Frango')

        cy.wait(2000)
        cy.scrollTo(0, 2600)

        //4º lista de sanduíches
        cy.get('[style="position: absolute; left: 0px; top: 1860px;"] > .card > .card-body').should('contain', 'Double Cheese Frango')
        cy.get('[style="position: absolute; left: 435px; top: 1860px;"] > .card > .card-body').should('contain', 'Chicken Barbecue')

        cy.wait(2000)
        cy.scrollTo(0, 3200)

        //5º lista de sanduíches
        cy.get('[style="position: absolute; left: 0px; top: 2480px;"] > .card > .card-body > h4').should('have.text', 'Tentador Carne')
        cy.get('[style="position: absolute; left: 435px; top: 2480px;"] > .card > .card-body > h4').should('have.text', 'Tentador Frango')

        cy.wait(2000)
    }

    selecionarSanduiche() {
        cy.get('[style="position: absolute; left: 0px; top: 2480px;"] > .card > .text-center > a > .card_img').click({ force: true })
        cy.get('[class="title"]').should('contain', 'Tentador Carne')
    }

    infoSanduiche() {
        cy.scrollTo(0, 300)
        cy.get('.col-md-8 > p').should('contain', 'Um hambúrguer de responsa com 160 g de carne bovina')
        cy.scrollTo(0, 700)
        cy.get('h3[class="text-center my-5"]').should('have.text', 'Informações Nutricionais')


        //kcall/porção
        cy.get('div[class="box-nutrition text-center d-flex flex-column justify-content-center align-items-center"] h4').should('have.text', 'Kcal/porção')
        cy.get('div[class="box-nutrition text-center d-flex flex-column justify-content-center align-items-center"] p').should('have.text', '1549 g')
        cy.get('div[class="box-nutrition text-center d-flex flex-column justify-content-center align-items-center"] small').should('have.text', '77,5%')
        cy.wait(1000)
    }


    acessarBobsFa() {
        cy.visit('https://www.bobsfa.com.br/login')
    }

    clicarBotaoSejaUmFa() {
        cy.get('.links-header > :nth-child(2) > a').click()
        cy.scrollTo(0, 300)
    }

    preencherFormulario(){
        cy.get('#nome').type('Victor Guilherme')
        cy.get('#sobrenome').type('Sudré Sobrinho')
        cy.get('#data_nascimento').type('01012000')
        cy.get('#cep').type('01010010')
        cy.get('#cpf').type('00000000000')
        cy.get('#email').type('email@email.com')
        cy.get('#sexoM').click()
        cy.get('#senha').type('senha123')
        cy.scrollTo(0, 300)
    }

    finalizarCadastro(){
        cy.get('button[type="submit"][name="btn-finalizar"]').click({force : true})
    }

    validarTelaInicialFa(){
        cy.get('span[class="name"]').should('have.text', 'Victor')
    }
}
export default new BobsPo;