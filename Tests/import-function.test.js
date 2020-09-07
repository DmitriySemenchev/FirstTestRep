import { Selector } from 'testcafe';
import { loginFunction, qwerty, asdfgh, zxcvbn } from '../helpers/FirstHelper';
// import { Helper } from '../helpers//FirstHelper'

fixture("My Fixture")
    .page("http://zero.webappsecurity.com/");
    await loginFunction('username', 'password');

    test("qwewq", async t => {
        await qwerty();
        await asdfgh();
        await zxcvbn();

    });
