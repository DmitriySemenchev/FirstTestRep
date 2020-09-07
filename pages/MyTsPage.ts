import { Selector, t} from 'testcafe'

class MyTsPage {
    signInButton: Selector = Selector('#signin_button')
    loginForm: Selector = Selector('#login_form')
    userNameInput: Selector = Selector('#user_login')
    passwordInput: Selector = Selector('#user_password')
    submitButton: Selector = Selector('.btn-primary')
    allertError: Selector = Selector('.alert-error')

    
async myLoginTs(username: string, password: string) {
        await t.click(this.signInButton)
        await t.typeText(this.userNameInput, username, {paste:true, replace:true, })
        await t.typeText(this.passwordInput, password)
        await t.click(this.submitButton)
    
        }    
}    

export default MyTsPage
