import { Selector, t } from 'testcafe'
import MyTsPage from '../pages/MyTsPage'

const myTsPage = new MyTsPage

fixture("My Fixture TS")
    .page("http://zero.webappsecurity.com/");


    test("My Test TS", async (t) => {
        await myTsPage.myLoginTs('qwe','asdfasd');

    })