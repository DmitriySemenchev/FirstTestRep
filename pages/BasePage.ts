import { Selector, t} from 'testcafe'

class BasePage{
    constructor(){
        
    }

    async waitFor(sec){
        let milisec = sec * 1000
        await t.wait(milisec)
    }

}
export default BasePage