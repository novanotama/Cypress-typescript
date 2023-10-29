import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('Test ADDProduct', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.productAdd()
    dashboardPage.assertAdd() 
})

it('Test REMOVEProduct', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
    dashboardPage.productAdd()
    dashboardPage.productRemove() 
    dashboardPage.assertRemove()
})

