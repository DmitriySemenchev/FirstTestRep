import { t } from 'testcafe'

export async function loginFunction(username, password){
    const signInButton = Selector('#signin_button');
    const userNameInput = Selector('#user_login');
    const passwordInput = Selector('#user_password');
    const submitButton = Selector('.btn-primary');

    await t.click(signInButton);    
    await t.typeText(userNameInput, 'invalid login');
    await t.typeText(passwordInput, 'invalidPass'); 
    await t.click(submitButton);
}

export async function qwerty(qwe){

};

export async function asdfgh(asd){

};

export async function zxcvbn(zxc){

};