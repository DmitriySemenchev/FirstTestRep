import { Selector } from 'testcafe'
import LoginPageTs from '../pages/LoginPage'
import { loginTsFunction } from '../helpers/FirstHelperTs';
import { loginTs } from '../pages/LoginPageTs';

const loginPage = new LoginPageTs

fixture("My Fixture")
    .page("http://zero.webappsecurity.com/");



    



    test("Login test with Typescript", async (t) => {
        // await loginPage.loginTs('usaername', 'password');

        // await loginTs('username', 'password');

        // await loginTsFunction('username', 'password');

        await loginTs



        
        
    });
    
