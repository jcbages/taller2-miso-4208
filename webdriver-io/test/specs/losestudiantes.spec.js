var assert = require('assert');
describe('los estudiantes login', function() {
    it('should visit los estudiantes and failed at log in', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');

        // In my local box the modal-header is still in the DOM so test were failing.
        // This tries to "ensure" the modal-header is definitely gone
        browser.pause(3000);

        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1234');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);

        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).toBe('Upss! El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.');
    });

    it('Visits los estudiantes and succeed at login', function () {
        browser.url('https://losestudiantes.co');

        // Not appearing anymore as previous test close it
        //browser.click('button=Cerrar');
        
        // In my local box the modal-header is still in the DOM so test were failing.
        // This tries to "ensure" the modal-header is definitely gone
        browser.pause(3000);
        
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('jcbages@outlook.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('1q2w3e4r');

        cajaLogIn.element('button=Ingresar').click()
        browser.waitForVisible('#cuenta', 5000);
    });

    it('Visit the page of the first professor', function () {
        browser.url('https://losestudiantes.co');
        
        // Not appearing anymore as previous test close it
        //browser.click('button=Cerrar');
        
        browser.waitForVisible('.profesor');

        var firstItem = browser.element('.profesor');
        firstItem.click();
    });
});