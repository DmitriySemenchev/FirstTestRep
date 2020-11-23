import { Selector, t} from 'testcafe'
import FeedbackPageTs from '../pages/FeedbackPageTs'

const feedbackPageTs = new FeedbackPageTs


fixture('Тестирование страницы Feedback')
.page('http://zero.webappsecurity.com/')

test('Проверка наличия элементов на форме обратной связи', async t =>{
    
    feedbackPageTs.goToFeedbackPage();
    await t.expect(feedbackPageTs.description.exists).ok();
    await t.expect(feedbackPageTs.fieldName.exists).ok();
    await t.expect(feedbackPageTs.fieldEmail.exists).ok()
    await t.expect(feedbackPageTs.fieldSubject.exists).ok()
    await t.expect(feedbackPageTs.fieldComment.exists).ok()

    await t.expect(feedbackPageTs.inputSubmit.exists).ok()
    // await t.expect(feedbackPageTs.inputClear.exists).ok()
    await t.expect(feedbackPageTs.inputSubmit.visible).ok()
    
        
    
})