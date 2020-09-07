import { t } from 'testcafe'
import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage;

export async function loginTsFunction( username:string, password:string){
    await t.click(loginPage.signInButton);    
    await t.typeText(loginPage.userNameInput, 'invalid login');
    await t.typeText(loginPage.passwordInput, 'invalidPass'); 
    await t.click(loginPage.submitButton);
}