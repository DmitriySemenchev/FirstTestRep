import { Selector, RequestLogger, RequestMock } from 'testcafe';
// import { Exempol } from '../helpers/Exemple'
import { ClientFunction } from 'testcafe'
import {  getCurentUrl2 } from '../helpers/Exemple';


fixture `My fixture`
    .page `http://devexpress.github.io/testcafe/example/`;

test('Assertion with Selector', async t => {
    const developerNameInput = Selector('#developer-name');

    const inputCheckbox = Selector('#tried-test-cafe')

    const logger = RequestLogger('http://example.com');
    const mock = RequestMock()

    await t
        .addRequestHooks(logger)
        .expect(developerNameInput.value).eql('')
        .typeText(developerNameInput, 'Peter')
        .expect(developerNameInput.value).eql('Peter');
        // const curentUrl = await getCurentUrl()
        // console.log('qweqweqwe  ' + curentUrl)
        const CurentUrl2 =  await getCurentUrl2()
        console.log('getCurentUrl2: ' + CurentUrl2)
    await t.click(inputCheckbox)
        .typeText('#comments', 'ку-ку ёпта')

    const element = Selector('.main-content')
    console.log(await element.childElementCount)
    console.log(await element.childNodeCount)
    console.log(await element.classNames)

    console.log(logger)
    
        
        
});