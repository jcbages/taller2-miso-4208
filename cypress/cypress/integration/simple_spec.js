describe('Los estudiantes login', function() {
    
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("bademail@gmail.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("badpassword")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })

    it('Visits los estudiantes and succeed at login', function () {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jcbages@outlook.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1q2w3e4r")
        cy.get('.cajaLogIn').contains('Ingresar').click()
    })

    it('Visit the page of the first professor', function () {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.profesor:first').find('a').click()
    })

    it('Search for a professor and select it', function () {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.get('.Select-input').find('input').type("mario linares", { force: true })
        cy.get('.Select-menu-outer').find('.Select-option:nth-child(2)').click()
    })
    
    it('Filter and unfilter professor subjetcs', function () {
        cy.visit('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
        cy.get('.materias').find('input[type="checkbox"]').click({ multiple: true })
        cy.get('.materias').find('input[type="checkbox"]').click({ multiple: true })
    })
})