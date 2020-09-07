import { Selector } from 'testcafe'


fixture `Старт с testCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t =>{
        // то что будет делаться перед началом прогона всех тестов например:
        // await runDatabase()
    })
    .beforeEach(async t =>{
        // То что будет делаться перед КАЖДЫМ тестом, например:
        //Открыть страницу, авторизоваться
        await t.setTestSpeed(1 )  //устанавливает скорость выполнения теста
        await t.setPageLoadTimeout(0);  // время в течении когорого testCafe ждет загрузку события на странице
    })
    .after(async t =>{
        //после прогона всех тестов 
    })
    .afterEach(async t => {
        // После прогона КАЖДОГО теста
    })

test('My First TestCafe test', async t =>{
    const nameInput = Selector('#developer-name');
    const submitButton = Selector('#submit-button');
    const articleText = Selector('#article-header');
    
    // await t.takeScreenshot({ fullPage: true });  // Сделает скрин всей страницы
    // await t.takeElementScreenshot(submitButton)     // Сделает скрин конкретного элемента на странице

    await t.typeText(nameInput, 'qwerty');
    await t.click(submitButton);
    await t.expect(Selector(articleText).innerText).contains('qwerty');

    
    
    
    
    
    
})
//  test.only('Единственный тест который будет запускаться', async t =>{})
test.skip('Тест который пропускается при выполнении. основные API', async t =>{
    // Click
    await t.click('selector', { options });
    // Double Click
    await t.doubleClick('selector', { options });
    //Right Click
    await t.rightClick('selector', { options });
    // Drag Element
    await t.drag('selector', { options });
    await t. dragToElement('selector', { options });
    // Hover
    await t.hover('selector', { options });
    // Select Text    
    await t.selectText('selector', { options });
    // Type Text
    await t.typeText('selector', 'text');
    // Press key on the keyboard
    await t.pressKey('key');
    // Navigate
    await t.navigateTo('url');
    // Resize window
    await t.resizeWindow(800, 600);

    //Assertion
    
    //Deep Equal Глубокое  сравнение 2 значений по содержимомоу и типу
    await t.expect('foo').eql('foo', 'Error message в случае ошибки');
    // Not Deep Equal
    await t.expect('foo').notEql('foo');
    //OK
    await t.expect(true).ok;
    //Not OK
    await t.expect(true).notOk;
    // Contains
    await t.expect('foo').contains('o');    // будет true
    // Not Contains
    await t.expect('foo').notContains('hey');    // будет true
    // Greater or Less than Больше/Меньше
    await t.expect(10).gt(10)   // Greater Than Больше чем
    await t.expect(10).gte(10)   // GreaTer Equal Больше чем или равно
    await t.expect(10).lt(10)   // Less Than Меньше чем
    await t.expect(10).lte(10)   // Less Than Equal Меньше чем или равно
    // Within В диапазоне
    await t.expect(10).within(1, 100);
    // Not Within В диапазоне
    await t.expect(10).notWithin(1, 100);


    // берется селектор с типом <input> который содржит атрибут со значением 'Send Message'
    const form_submit = Selector('input').withAttribute('value', 'Send Message')
    


})
