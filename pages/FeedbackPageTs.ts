import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

// extends BasePage - значит этот клас наследуется от BasePage
class FeedbackPageTs extends BasePage
 {    
     constructor(){
         super()
     }
    linkFeedbackage: Selector = Selector('#feedback')
    title: Selector = Selector('#feedback-title')
    description: Selector = Selector('#description')
    fieldName: Selector = Selector('#name')
    fieldEmail: Selector = Selector('#email')
    fieldSubject = Selector('#subject')
    fieldComment = Selector('#comment')

    inputSubmit = Selector('input').withAttribute('name', 'submit')

    // inputSubmit = Selector('#submit')
    // inputClear = Selector('#clear')

    async goToFeedbackPage(){
        const textTitle = (this.title).innerText
        await t.click(this.linkFeedbackage)
        await t.expect(this.title.exists).ok()
        console.log('wait 4 sec')
        await this.waitFor(4)
        console.log('finish wait 4 sec')
    }

    async waitFor(sec){
        super.waitFor(sec)     
        console.log("вызов ")  
    }

}
export default FeedbackPageTs