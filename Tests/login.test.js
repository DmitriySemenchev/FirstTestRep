import { Selector } from 'testcafe';
import LoginPage from '../pages/loginPage';


const loginPage = new LoginPage()


fixture `Login Test`
.page `http://zero.webappsecurity.com/`;


test('логин с невалидными данными. Использование PO Pattern', async t =>{
    
    await loginPage.loginAs('invalid username', 'invalid password');

    // await t.click(loginPage.signInButton);   
    // await t.expect(loginPage.loginForm.exists).ok();
    // await t.typeText(loginPage.userNameInput, 'invalid login');
    // await t.typeText(loginPage.passwordInput, 'invalidPass');


    await t.expect(loginPage.allertError).ok();
    await t.expect(loginPage.allertError.innerText).contains('Login and/or password are wrong.');
})



test('User cannot login with invalid credentials', async t =>{
    const signInButton = Selector('#signin_button');
    await t.click(signInButton);

    const loginForm = Selector('#login_form');
    await t.expect(loginForm.exists).ok();      // exists - свойство элемента проверяет что есть хотя бы 1 такой элемент и возвращает true

    const userNameInput = Selector('#user_login');
    const passwordInput = Selector('#user_password');
    await t.typeText(userNameInput, 'invalid login');
    await t.typeText(passwordInput, 'invalidPass');
 
    const submitButton = Selector('.btn-primary');
    await t.click(submitButton);

    const allertError = Selector('.alert-error').innerText;     // .innerText - получает текст в элементе
    await t.expect(allertError).ok();
    await t.expect(allertError).contains('Login and/or password are wrong.');
})

test('User can login with valid credentials', async t =>{
    const signInButton = Selector('#signin_button');
    await t.click(signInButton);

    const loginForm = Selector('#login_form');
    await t.expect(loginForm.exists).ok();      // exists - свойство элемента проверяет что есть хотя бы 1 такой элемент и возвращает true

    const userNameInput = Selector('#user_login');
    const passwordInput = Selector('#user_password');
    await t.typeText(userNameInput, 'username');
    await t.typeText(passwordInput, 'password');
    
    const submitButton = Selector('.btn-primary');
    await t.click(submitButton);

   const accountSummaryTab = Selector('#account_summary_tab');
   await t.expect(accountSummaryTab.exists).ok();
   await t.expect(loginForm.exists).notOk();

//    const userIcon = Selector('.icon-user');
//    const logoutLink = Selector('#logout_link');
//    await t.click(userIcon);
//    await t.click(logoutLink);
//    await t.expect(accountSummaryTab.exists).notOk();
//    await t.expect(signInButton.exists).ok();


})






