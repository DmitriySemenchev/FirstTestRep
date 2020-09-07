import { Selector, t } from 'testcafe'

class LoginPage {
    constructor() {
        this.signInButton = Selector('#signin_button');
        this.loginForm = Selector('#login_form');
        this.userNameInput = Selector('#user_login');
        this.passwordInput = Selector('#user_password');
        this.submitButton = Selector('.btn-primary');
        this.allertError = Selector('.alert-error');
    }

    async loginAs (username, password){
        
        await t.click(this.signInButton);
        await t.expect(this.loginForm.exists).ok();      // exists - свойство элемента проверяет что есть хотя бы 1 такой элемент и возвращает true
        await t.typeText(this.userNameInput, username);
        await t.typeText(this.passwordInput, password); 
        await t.click(this.submitButton);
       
       
    
    }

}


  
export default LoginPage


