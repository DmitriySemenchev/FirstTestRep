import { Selector } from "testcafe";
import {XpathSelector} from "testcafe";

fixture('Восстановление пароля')
.page('http://zero.webappsecurity.com');

test("Восстановить пароль", async (t) => {
    // Get Selector
    const signinButton = Selector('#signin_button');
    const linkForgotPassword = Selector('a').withText('Forgot your password ?');
    const fieldEmail = Selector('#user_email');
    const message = Selector('div').innerText;
    // Actions
    await t.click(signinButton);
    await t.expect(linkForgotPassword.exists).ok();
    
    // Assertion
    
});

