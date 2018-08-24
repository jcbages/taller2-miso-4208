module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes login falied': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      
      // In my local box the modal-header is still in the DOM so test were failing.
      // This tries to "ensure" the modal-header is definitely gone
      .pause(1000)
      
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .waitForElementVisible('.cajaLogIn', 4000)
      .setValue('.cajaLogIn input[name="correo"]', 'wrongemail@example.com')
      .setValue('.cajaLogIn input[name="password"]', '1234')
      .click('.cajaLogIn .logInButton')
      .waitForElementVisible('.aviso.alert.alert-danger', 4000)
      .assert.containsText('.aviso.alert.alert-danger', 'El correo y la contraseña que ingresaste no figuran')
      .end();
  },
  'Search for a professor and select it': function (browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')

      // In my local box the modal-header is still in the DOM so test were failing.
      // This tries to "ensure" the modal-header is definitely gone
      .pause(1000)

      .waitForElementVisible('.Select-input', 4000)
      .setValue('.Select-input input', 'mario linares')
      .waitForElementVisible('.Select-menu-outer .Select-option', 4000)
      .click('.Select-menu-outer .Select-option:nth-child(2)')
      .waitForElementVisible('.descripcionProfesor', 4000)
      .end();
  },
  'Filter and unfilter professor subjects': function (browser) {
    browser
      .url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
      .waitForElementVisible('.materias', 4000)
      .click('.materias input[type="checkbox"]')
      .click('.materias input[type="checkbox"]')
      .end();
  },
  
};